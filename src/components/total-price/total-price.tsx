import React, {FC} from 'react';
import styles from './total-price.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {totalPriceSelector} from "./utils";
import {useAppSelector} from "../../services/hooks";

const TotalPrice: FC = () => {

  const price = useAppSelector(totalPriceSelector);

  return (
    <span className={styles.price + ' text text_type_digits-medium'}>
          {price}
      <CurrencyIcon type="primary"/>
    </span>
  );
};

export default TotalPrice;
