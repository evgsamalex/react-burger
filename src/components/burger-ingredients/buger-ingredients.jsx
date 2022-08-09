import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import {getCategoryName, groupBy} from "../../utils/utils";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = props => {

  const categories = groupBy(props.data, 'type');

  const [currentTab, setCurrentTab] = useState('bun');

  const [modalState, setModalState] = useState({
    isOpen: false,
    ingredient: null
  });

  const handleClick = e => {
    setModalState({isOpen: true, ingredient: e});
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


BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired
};

export default BurgerIngredients;
