import React from 'react';
import {orderPropTypes, orderResultPropTypes} from "../../utils/proptypes/order";
import styles from './order-result.module.css'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const OrderResult = ({order}) => {
  return (
    <div className='center columns'>
      <h2 className={styles.order__number + ' text text_type_digits-large mt-15'}>{order.number}</h2>
      <h3 className='text text_type_main-medium mt-8 mb-15'>идентификатор заказа</h3>
      <CheckMarkIcon type="primary"/>
      <p className='text text_type_main-default  mt-15'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive mt-2 mb-15'> Дождитесь готовности заказа на
        орбитальной
        станции</p>
    </div>
  );
};

OrderResult.propTypes = {
  order: orderResultPropTypes
};

export default OrderResult;
