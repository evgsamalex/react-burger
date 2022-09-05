import React from 'react';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './burger-ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {ingredientsSlice} from "../../services/reducers/ingredientsSlice";

const BurgerIngredient = React.memo(({ingredient}) => {
  console.log('render ingredient')

  const count = 0;

  const dispatch = useDispatch();

  return (
    <div className={styles.card} onClick={() => dispatch(ingredientsSlice.actions.showDetails(ingredient))}>
      <img src={ingredient.image} alt={ingredient.name}/>
      {count > 0 && <Counter count={count} size="default"/>}
      <div className={styles.card__price + ' mt-1'}>
        <span className='text text_type_digits-default'>{ingredient.price}</span>
        <CurrencyIcon type='primary'/>
      </div>
      <span className={styles.card__name + ' text text_type_main-default mt-1'}>{ingredient.name}</span>
    </div>
  );
})


BurgerIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  onClick: PropTypes.func
};

export default BurgerIngredient;
