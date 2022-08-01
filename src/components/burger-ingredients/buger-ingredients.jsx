import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

const BurgerIngredients = props => {

  const categories = [{type: 'bun', name:'Булки'}, {type: 'sauce', name: 'Соусы'},{type: 'main', name: 'Начинки'}]

  categories.forEach(category=>{
    category.items = props.data.filter(x=>x.type===category.type)
  })

  const[currentTab, setCurrentTab] = useState('bun');

  return (
    <div className={styles.container}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <div className={styles.container__tab}>
        {
          categories.map((category)=>(
            <Tab key={category.type} active={category.type===currentTab} value={category.type} onClick={setCurrentTab}>{category.name}</Tab>
          ))
        }
      </div>
      <div style={{height: '100%', position:'relative'}}>
        <ul className={styles.container__ingredients}>
          {
            categories.map((category)=>(
              <li key={category.type} className={styles.category + ' mt-10'}>
                <h2 className='text text_type_main-medium'>{category.name}</h2>
                <ul className={styles.category__items + ' ml-4 mr-4 mt-6'}>
                  {category.items.map((item)=>(
                    <li>
                      <BurgerIngredient key={item._id} ingredient={item} />
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
  data: PropTypes.arrayOf(ingredientPropTypes)
};

export default BurgerIngredients;
