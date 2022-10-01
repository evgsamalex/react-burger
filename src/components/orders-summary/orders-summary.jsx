import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {summarySelector} from "./lib";
import css from './orders-summary.module.css'

const OrdersSummary = ({orderIds}) => {
  const {total, totalToday, pending, done} = useSelector(summarySelector(orderIds))
  return (
    <div className={'columns'}>
      <div className={css.orders}>
        <OrderNumbers title={'Готовы:'} numbers={done}
                      className={'text text_type_digits-default text_color_success'}/>
        <OrderNumbers title={'В работе:'} numbers={pending}
                      className={'text text_type_digits-default text_color_primary'}/>
      </div>
      <h2 className={'text text_type_main-medium text_color_primary mt-15'}>Выполнено за все время:</h2>
      <span className={css.total + ' text text_type_digits-large text_color_primary'}>{total}</span>

      <h2 className={'text text_type_main-medium text_color_primary mt-15'}>Выполнено за сегодня:</h2>
      <span className={css.total + ' text text_type_digits-large text_color_primary'}>{totalToday}</span>
    </div>
  );
};

const OrderNumbers = ({title, numbers, className}) => {
  return (
    <div className={'columns'}>
      <h2 className={'text text_type_main-medium text_color_primary mb-6'}>{title}</h2>
      <ul className={css.numbers}>
        {numbers.map((number) => (
          <li key={number}><span className={className}>{number}</span></li>
        ))}
      </ul>
    </div>
  )
}

OrdersSummary.propTypes = {
  orderIds: PropTypes.arrayOf(PropTypes.string)
};

export default OrdersSummary;
