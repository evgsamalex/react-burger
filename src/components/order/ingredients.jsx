import React from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import css from './ingredients.module.css'
import IngredientImage from "./ingredient-image";

const Ingredients = ({ingredients}) => {
  const max = 5;
  return (
    <div className={css.ingredients}>
      {
        ingredients.map((ingredient, index) => {
          if (index > max) return null;
          const count = index === max ? ingredients.length - max : undefined;
          return ingredientWrapper(ingredient, ingredients.length - index, count)
        })
      }
    </div>
  );
};

const ingredientWrapper = (ingredient, zIndex, count = undefined) => {
  return (
    <div key={ingredient._id} className={css.ingredient} style={{zIndex: zIndex}}>
      <IngredientImage image={ingredient.image}/>
      {count &&
        <div className={css.count}><span className={'text text_type_main-default text_color_primary'}>+{count}</span>
        </div>}
    </div>
  )
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes)
};

export default Ingredients;
