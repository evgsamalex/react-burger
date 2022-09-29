import React from 'react';
import PropTypes from 'prop-types';
import css from "./burger-constructor-ingredient.module.css";
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import BurgerConstructorIngredient from "./burger-constructor-ingredient";
import Scroll from "../scroll/scroll";

const BurgerConstructorIngredients = ({ingredients}) => {
  return (
    <Scroll>
      <ul className={css.items + ' list'}>
        {ingredients.length > 0 &&
          ingredients.map((ingredient) => {
            return (
              <BurgerConstructorIngredient key={ingredient.uuid} ingredient={ingredient}/>
            )
          })}
      </ul>
    </Scroll>
  );
};

BurgerConstructorIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes)
};

export default BurgerConstructorIngredients;
