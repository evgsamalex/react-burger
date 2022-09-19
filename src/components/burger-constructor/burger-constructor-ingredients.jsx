import React from 'react';
import PropTypes from 'prop-types';
import styles from "./burger-constructor-ingredients.module.css";
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import BurgerConstructorIngredient from "./burger-constructor-ingredient";

const BurgerConstructorIngredients = ({ingredients}) => {
  return (
    <div className={styles.items}>
      <ul className={styles.list}>
        {ingredients.length > 0 &&
          ingredients.map((ingredient, index) => {
            return (
              <BurgerConstructorIngredient key={ingredient.uuid} ingredient={ingredient}/>
            )
          })}
      </ul>
    </div>
  );
};

BurgerConstructorIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes)
};

export default BurgerConstructorIngredients;
