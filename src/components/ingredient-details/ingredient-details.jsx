import React from 'react';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './ingredient-details.module.css'

const IngredientDetails = ({ingredient}) => {
  return (
    <div className={styles.card + ' mb-5'}>
      <img src={ingredient.image_large} alt={ingredient.name} className={styles.card__img}/>
      <h3 className='text text_type_main-medium mt-4 mb-8'>{ingredient.name}</h3>
      <ul className={styles.card__composition}>
        <li className={styles.card__composition_item + ' text text_type_main-default text_color_inactive'}>
          Калории,ккал
          <span className='text text_type_digits-default mt-2'>{ingredient.calories}</span>
        </li>
        <li className={styles.card__composition_item + ' text text_type_main-default text_color_inactive'}>
          Белки, г
          <span className='text text_type_digits-default mt-2'>{ingredient.proteins}</span>
        </li>
        <li className={styles.card__composition_item + ' text text_type_main-default text_color_inactive'}>
          Жиры, г
          <span className='text text_type_digits-default mt-2'>{ingredient.fat}</span>
        </li>
        <li className={styles.card__composition_item + ' text text_type_main-default text_color_inactive'}>
          Углеводы, г
          <span className='text text_type_digits-default mt-2'>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired
};

export default IngredientDetails;
