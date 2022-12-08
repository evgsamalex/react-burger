import React, {FC} from 'react';
import {summarySelector} from "./lib";
import css from './orders-summary.module.css'
import {useAppSelector} from "../../services/hooks";


const OrdersSummary: FC<{ orderIds: string[] }> = ({orderIds}) => {
  const {total, totalToday, pending, done} = useAppSelector(summarySelector(orderIds))
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

const OrderNumbers: FC<{ title: string, numbers: number[], className: string }> = ({title, numbers, className}) => {
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

export default OrdersSummary;
