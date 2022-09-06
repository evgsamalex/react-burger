import React from 'react';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor-bun.module.css';
import {isNullOrEmpty} from "../../utils/utils";
import PropTypes from "prop-types";

const BurgerConstructorBun = ({bun, isUp}) => {
  const type = isUp ? 'top' : 'bottom';
  const description = isUp ? 'верх' : 'низ';

  if (!isNullOrEmpty(bun)) {
    return (
      <div className={styles.bun + ' pl-4 pr-6 pb-4'}>
        <ConstructorElement text={bun.name + ` (${description})`} thumbnail={bun.image}
                            price={bun.price} type={type}
                            isLocked={true}/>
      </div>
    );
  }
};

BurgerConstructorBun.propTypes = {
  bun: ingredientPropTypes,
  isUp: PropTypes.bool
};

export default BurgerConstructorBun;
