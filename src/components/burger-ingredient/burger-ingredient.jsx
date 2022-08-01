import React, {useState} from 'react';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './burger-ingredient.module.css'
import {Counter,CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredient = ({ingredient}) => {

  const [count, setCount] = useState(0);

  const addItem = () =>{
    setCount(count+1);
  }

  return (
    <div className={styles.card}>
      <img src={ingredient.image} alt={ingredient.name} onClick={addItem} />
      {count>0 && <Counter count={count} size="default" />}
      <div className={styles.card__price + ' mt-1'}>
        <span className='text text_type_digits-default'>{ingredient.price}</span>
      <CurrencyIcon type='primary'/>
      </div>
      <span className='text text_type_main-default mt-1' style={{textAlign:'center', minHeight:'48px'}}>{ingredient.name}</span>
    </div>
  );
};



BurgerIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired
};

export default BurgerIngredient;
