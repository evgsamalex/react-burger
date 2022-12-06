import React, {FC} from 'react';
import styles from './burger-ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientCountSelector} from "./utils";
import {useDrag} from "react-dnd";
import {routes} from "../../utils/routes";
import {Link, useLocation} from "react-router-dom";
import {DragType} from "../../services/types/drag";
import {TIngredient} from "../../services/types/data";
import {useAppSelector} from "../../services/hooks";
import {TLocationState} from "../../pages";

type TBurgerIngredientProps = {
  ingredient: TIngredient;
}

const BurgerIngredient: FC<TBurgerIngredientProps> = ({ingredient}) => {
  console.log('render ingredient')

  const count = useAppSelector(state => ingredientCountSelector(state, ingredient._id));

  const location = useLocation<TLocationState>();

  const [, drag] = useDrag(() => ({
    type: DragType.INGREDIENT,
    item: ingredient
  }))

  return (
    <Link className={'link'} key={ingredient._id} to={
      {
        pathname: routes.ingredients.replace(':id', ingredient._id),
        state: {background: location}
      }}>
      <div className={styles.card}
           ref={drag}>
        <img src={ingredient.image} alt={ingredient.name} draggable={false}/>
        {count > 0 && <Counter count={count} size="default"/>}
        <div className={styles.card__price + ' mt-1'}>
          <span className='text text_type_digits-default text_color_primary'>{ingredient.price}</span>
          <CurrencyIcon type='primary'/>
        </div>
        <span
          className={styles.card__name + ' text text_type_main-default text_color_primary mt-1'}>{ingredient.name}</span>
      </div>
    </Link>
  );
}


export default React.memo(BurgerIngredient);
