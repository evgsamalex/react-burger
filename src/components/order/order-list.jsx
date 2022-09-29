import React, {memo} from 'react';
import PropTypes from 'prop-types';
import css from './order.module.css'
import Order from "./order";

const OrderList = ({ordersIds}) => {
  return (
    <ul className={css.order_list}>
      {ordersIds.map((id) => (
        <li key={id} className={'mr-2'}>
          <Order orderId={id}></Order>
        </li>
      ))}
    </ul>
  );
};

OrderList.propTypes = {
  ordersIds: PropTypes.arrayOf(PropTypes.string)
};

export default memo(OrderList);
