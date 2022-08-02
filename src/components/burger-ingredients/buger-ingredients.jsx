import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import {getCategoryName, groupBy} from "../../utils/utils";

const BurgerIngredients = props => {

  const categories = groupBy(props.data, 'type');

  const[currentTab, setCurrentTab] = useState('bun');

  return (
    <div className={styles.constructor}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <div className={styles.container__tab}>
        {
          Object.keys(categories).map((type)=>(
            <Tab key={type} active={type===currentTab} value={type} onClick={setCurrentTab}>{getCategoryName(type)}</Tab>
          ))
        }
      </div>
      <div style={{height: '100%', position:'relative'}}>
        <ul className={styles.container__ingredients}>
          {
            Object.keys(categories).map((type)=>(
              <li key={type} className={styles.category + ' mt-10'}>
                <h2 className='text text_type_main-medium'>{getCategoryName(type)}</h2>
                <ul className={styles.category__items + ' ml-4 mr-4 mt-6'}>
                  {categories[type].map((item)=>(
                    <li key={item._id}>
                      <BurgerIngredient ingredient={item} />
                    </li>
                  ))}
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};



BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired
};

export default BurgerIngredients;
