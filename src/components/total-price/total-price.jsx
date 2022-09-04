import React, {useContext} from 'react';
import styles from './total-price.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TotalPriceContext} from "../../services/app-context";

const TotalPrice = () => {

  const {totalPriceState} = useContext(TotalPriceContext);

  return (
    <span className={styles.price + ' text text_type_digits-medium'}>
          {totalPriceState.price}
      <CurrencyIcon type="primary"/>
    </span>
  );
};

export default TotalPrice;
