import React from 'react';
import css from './order.module.css';
import {ingredientsSelector, orderSelector, toOrderDate, toOrderStatus} from "./lib";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import Ingredients from "./ingredients";

const Order = ({orderId}) => {

  const order = useSelector(orderSelector(orderId));

  const {ingredients, totalPrice} = useSelector(ingredientsSelector(order.ingredients))

  return (
    <div className={css.order + ' p-6'}>
      <div className={'text text_type_main-small text_color_primary'}>
        <div className={css.order__header}>
          <h2 className={'text text_type_digits-default text_color_primary'}>#{order.number}</h2>
          <span className={'text text_type_main-small text_color_inactive'}>{toOrderDate(order.createdAt)}</span>
        </div>
        <h3 className={'text text text_type_main-medium text_color_primary mt-6'}>{order.name}</h3>
        <span className={'text text_type_main-default text_color_success mt-2'}>{toOrderStatus(order.status)}</span>
        <div className={css.order__main + ' mt-6'}>
          <Ingredients ingredients={ingredients}/>
          <span className={css.order__price + ' text text_type_digits-default text_color_primary'}>
            {totalPrice} <CurrencyIcon type="primary"/>
          </span>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  orderId: PropTypes.string
};

export default React.memo(Order);
