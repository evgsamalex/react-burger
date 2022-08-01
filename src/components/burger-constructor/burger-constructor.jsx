import React from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './burger-constructor.module.css'
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = props => {

  const length = props.data.length;

  const sum = props.data.reduce((partialSum, a) => partialSum + a.price, 0);

  return (
    <div className={styles.constructor}>
      <div className={styles.constructor__items + ' mt-25 mb-10'}>
        <ul className={styles.constructor__list}>
          {props.data.map((ingredient, index)=>{
            const isFirst = index===0;
            const isLast = index === length-1;
            const type = isFirst ? 'top' : isLast? 'bottom' : undefined;
            const isLock = isFirst || isLast;
            return (
              <li key={ingredient._id} className='ml-4 mr-4' style={{display: "flex", alignItems:'center', justifyContent:"flex-end"}}>
                {!isFirst && !isLast && <DragIcon type="primary" />}
                <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price} type={type} isLocked={isLock} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.total + ' mt-10 mb-10 mr-4'}>
        <span className={styles.total__price +' text text_type_digits-medium'}>
          {sum}
          <CurrencyIcon type="primary" />
        </span>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired
};



export default BurgerConstructor;
