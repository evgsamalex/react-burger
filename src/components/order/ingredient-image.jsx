import React from 'react';
import PropTypes from 'prop-types';
import css from "./ingredient-image.module.css";

const IngredientImage = ({image, name}) => {
  return (
    <div className={css.ingredient}>
      <img src={image} className={css.ingredient__image} alt={name}/>
    </div>
  );
};

IngredientImage.propTypes = {
  image: PropTypes.string
};

export default IngredientImage;
