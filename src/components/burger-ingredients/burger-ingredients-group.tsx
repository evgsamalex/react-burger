import React, {FC, useEffect, useRef} from 'react';
import styles from './burger-ingredients-group.module.css'
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import {useObserver} from "../../hooks/useObserver";
import {tabsSlice} from "../../services/reducers/tabsSlice";
import {IngredientType, TCategory} from "../../services/types/data";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {TIngredientsState} from "../../services/reducers/ingredientsSlice";

const BurgerIngredientsGroup: FC<{ category: TCategory }> = ({category}) => {

  const element = useRef(null);

  const dispatch = useAppDispatch();

  const {clicked, selected} = useAppSelector(store => store.tabs);

  useObserver(element, entry => {
    dispatch(tabsSlice.actions.intersected({type: category.type, isIntersecting: entry.isIntersecting}))
  })

  useEffect(() => {
    if (selected === category.type && element.current) {
      const li = element.current as HTMLLIElement;
      li.scrollIntoView({behavior: "smooth"});
    }
  }, [clicked])

  const items = useAppSelector(state => selectItemsByCategory(state.ingredients, category.type));

  return (
    <li ref={element} className={styles.category + ' mt-10 ' + category.type}>
      <h2 className='text text_type_main-medium'>{category.name}</h2>
      <ul className={styles.category__items + ' ml-4 mr-4 mt-6'}>
        <ul className={styles.category__items + ' ml-4 mr-4 mt-6'}>
          {items.map((item) => (
            <li key={item._id}>
              <BurgerIngredient key={'b' + item._id} ingredient={item}/>
            </li>
          ))}
        </ul>
      </ul>
    </li>
  );
};

const selectItemsByCategory = (state: TIngredientsState, type: IngredientType) => {
  return state.items.filter(x => x.type === type)
};

export default BurgerIngredientsGroup;
