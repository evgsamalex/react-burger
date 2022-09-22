import React, {useEffect, useRef} from 'react';
import styles from './burger-ingredients-group.module.css'
import {selectItemsByCategory} from "../../services/reducers/ingredientsSlice";
import {useDispatch, useSelector} from "react-redux";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import {useObserver} from "../../hooks/useObserver";
import {tabsSlice} from "../../services/reducers/tabsSlice";

const BurgerIngredientsGroup = ({category}) => {

  const element = useRef()

  const dispatch = useDispatch();

  const {clicked, selected} = useSelector(store => store.tabs);

  useObserver(element, entry => {
    dispatch(tabsSlice.actions.intersected({type: category.type, isIntersecting: entry.isIntersecting}))
  })

  useEffect(() => {
    if (selected === category.type) {
      element.current.scrollIntoView({behavior: "smooth"});
    }
  }, [clicked])

  const items = useSelector(state => selectItemsByCategory(state.ingredients, category.type));

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

export default BurgerIngredientsGroup;
