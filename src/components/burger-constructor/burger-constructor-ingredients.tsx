import React, {FC} from 'react';
import css from "./burger-constructor-ingredient.module.css";
import BurgerConstructorIngredient from "./burger-constructor-ingredient";
import Scroll from "../scroll/scroll";
import {TBurgerConstructorItem} from "../../services/types/data";

const BurgerConstructorIngredients: FC<{ ingredients: Array<TBurgerConstructorItem> }> = ({ingredients}) => {
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

export default BurgerConstructorIngredients;
