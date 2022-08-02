import React from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './burger-constructor.module.css'
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = props => {

  const [bun] = props.data.filter(x => x.type === 'bun');
  const notLocked = props.data.filter(x => x.type !== 'bun');
  const sum = notLocked.reduce((partialSum, a) => partialSum + a.price, 0) + bun.price * 2;

  return (
    <div className={styles.ingredients + ' pt-25'}>
      <div className={styles.constructor__lock + ' pl-4 pr-6 pb-4'}>
        <ConstructorElement text={bun.name + ' (верх)'} thumbnail={bun.image} price={bun.price} type={'top'}
                            isLocked={true}/>
      </div>
      <div className={styles.constructor__items}>
        <ul className={styles.constructor__list}>
          {notLocked.map((ingredient) => {
            return (
              <li key={ingredient._id} className={styles.constructor__item + ' ml-4 mr-4'}
              >
                <DragIcon type="primary"/>
                <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price}/>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.constructor__lock + ' pl-4 pr-6 pt-4'}>
        <ConstructorElement text={bun.name + ' (низ)'} thumbnail={bun.image} price={bun.price} type={'bottom'}
                            isLocked={true}/>
      </div>
      <div className={styles.total + ' mt-10 mb-10 mr-4'}>
        <span className={styles.total__price + ' text text_type_digits-medium'}>
          {sum}
          <CurrencyIcon type="primary"/>
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
