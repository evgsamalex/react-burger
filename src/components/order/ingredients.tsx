import React, {FC} from 'react';
import css from './ingredients.module.css'
import IngredientImage from "./ingredient-image";
import {TOrderIngredients} from "./lib";
import {TIngredient} from "../../services/types/data";

const Ingredients: FC<{ ingredients: TOrderIngredients }> = ({ingredients}) => {
  const max = 5;
  const count = Object.keys(ingredients).length;
  return (
    <div className={css.ingredients}>
      {
        Object.values(ingredients.ingredients).map((item, index) => {
          if (index > max) return null;
          const plusCount = index === max ? count - max : undefined;
          return ingredientWrapper(item.ingredient, count - index, plusCount)
        })
      }
    </div>
  );
};

const ingredientWrapper = (ingredient: TIngredient, zIndex: number, count: number | undefined = undefined) => {
  return (
    <div key={ingredient._id} className={css.ingredient} style={{zIndex: zIndex}}>
      <IngredientImage image={ingredient.image} name={ingredient.name}/>
      {count &&
        <div className={css.count}><span className={'text text_type_main-default text_color_primary'}>+{count}</span>
        </div>}
    </div>
  )
}

export default Ingredients;
