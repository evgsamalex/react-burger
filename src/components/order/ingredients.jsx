import React from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import css from './ingredients.module.css'
import IngredientImage from "./ingredient-image";

const Ingredients = ({ingredients}) => {
  const max = 5;
  const count = Object.keys(ingredients).length;
  return (
    <div className={css.ingredients}>
      {
        Object.values(ingredients).map((item, index) => {
          if (index > max) return null;
          const plusCount = index === max ? count - max : undefined;
          return ingredientWrapper(item.ingredient, count - index, plusCount)
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
  ingredients: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    ingredient: ingredientPropTypes,
    count: PropTypes.number
  }))
};

export default Ingredients;
