import React from 'react';
import styles from './total-price.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import {totalPriceSelector} from "./utils";

const TotalPrice = () => {

  const price = useSelector(totalPriceSelector);

  return (
    <span className={styles.price + ' text text_type_digits-medium'}>
          {price}
      <CurrencyIcon type="primary"/>
    </span>
  );
};

export default TotalPrice;
