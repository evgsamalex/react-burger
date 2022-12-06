import React, {FC} from 'react';
import css from "./ingredient-image.module.css";

const IngredientImage: FC<{ image: string, name: string }> = ({image, name}) => {
  return (
    <div className={css.ingredient}>
      <img src={image} className={css.ingredient__image} alt={name}/>
    </div>
  );
};

export default IngredientImage;
