import React, {useState} from 'react';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './burger-ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerIngredient = React.memo(({ingredient, onClick}) => {

  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
  }

  const handleClick = () => {
    onClick(ingredient)
  }

  console.log('render');

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={ingredient.image} alt={ingredient.name} onClick={addItem}/>
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
