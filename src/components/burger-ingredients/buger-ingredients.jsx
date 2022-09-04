import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import {getCategoryName, groupBy} from "../../utils/utils";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {ingredientsSlice} from "../../services/reducers/ingredientsSlice";
import Loading from "../loading/loading";
import {fetchIngredients} from "../../services/actions/fetchIngredients";
import DisplayError from "../error/display-error";

const BurgerIngredients = () => {

  const {isLoading, items, error} = useSelector(store => store.ingredients)

  const [currentTab, setCurrentTab] = useState('bun');

  const categories = useMemo(() => groupBy(items, 'type'), [items, currentTab]);

  const [modalState, setModalState] = useState({
    isOpen: false,
    ingredient: null
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])

  const handleClick = e => {
    setModalState({isOpen: true, ingredient: e});
  }

  const result = (content) =>
    (
      <div className={styles.ingredients}>
        {content}
      </div>
    )

  if (isLoading) {
    return result(<Loading absolute={true}/>)
  }

  if (error) {
    return result(<DisplayError error={error} absolute={true}/>)
  }

  return (
    <div className={styles.ingredients}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <div className={styles.ingredients__tab}>
        {
          Object.keys(categories).map((type) => (
            <Tab key={type} active={type === currentTab} value={type}
                 onClick={setCurrentTab}>{getCategoryName(type)}</Tab>
          ))
        }
      </div>
      <div className={styles.container}>
        <ul className={styles.container__ingredients}>
          {
            Object.keys(categories).map((type) => (
              <li key={type} className={styles.category + ' mt-10'}>
                <h2 className='text text_type_main-medium'>{getCategoryName(type)}</h2>
                <ul className={styles.category__items + ' ml-4 mr-4 mt-6'}>
                  {categories[type].map((item) => (
                    <li key={item._id}>
                      <BurgerIngredient key={'b' + item._id} ingredient={item} onClick={handleClick}/>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
      {
        modalState.isOpen && modalState.ingredient &&
        <Modal
          onClose={() => setModalState({...modalState, isOpen: false})}
          title='Детали ингредиента'
        >
          <IngredientDetails ingredient={modalState.ingredient}/>
        </Modal>
      }
    </div>
  );
};

export default BurgerIngredients;
