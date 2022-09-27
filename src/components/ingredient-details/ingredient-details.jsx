import React from 'react';
import styles from './ingredient-details.module.css'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PageContent from "../page-content/page-content";
import DisplayError from "../error/display-error";
import Loading from "../loading/loading";

const IngredientDetails = () => {

  const {id} = useParams();

  const {isLoading, error, items} = useSelector(store => store.ingredients)

  if (items.length === 0) {
    return null;
  }

  const ingredient = items.find(x => x._id === id);

  if (!ingredient || error) {
    const err = error || 'Ингредиент не найден';
    return (
      <PageContent>
        <DisplayError error={err}></DisplayError>
      </PageContent>
    )
  }

  if (isLoading) {
    return (
      <PageContent>
        <Loading/>
      </PageContent>
    )
  }

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

IngredientDetails.propTypes = {};

export default IngredientDetails;
