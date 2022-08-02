import React from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from './burger-constructor.module.css'
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = props => {

  const sum = props.data.reduce((partialSum, a) => partialSum + a.price, 0);

  const [first, last] = props.data.filter(x=>x.type==='bun');
  const notLocked = props.data.filter(x=>x.type!=='bun');

  return (
    <div className={styles.constructor + ' pt-25'}>
      <div className='pl-4 pr-6 pb-4' style={{width:'100%', boxSizing: "border-box", textAlign:'right'}}>
        <ConstructorElement text={first.name} thumbnail={first.image} price={first.price} type={'top'} isLocked={true} />
      </div>
      <div className={styles.constructor__items}>
        <ul className={styles.constructor__list}>
          {notLocked.map((ingredient)=>{
            return (
              <li key={ingredient._id} className='ml-4 mr-4' style={{display: "flex", alignItems:'center', justifyContent:"flex-end"}}>
                <DragIcon type="primary" />
                <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className='pl-4 pr-6 pt-4' style={{width:'100%', textAlign:'right'}}>
        <ConstructorElement text={last.name} thumbnail={last.image} price={last.price} type={'bottom'} isLocked={true} />
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
