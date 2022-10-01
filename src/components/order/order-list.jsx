import React, {memo} from 'react';
import PropTypes from 'prop-types';
import css from './order.module.css'
import Order from "./order";
import {Link, useLocation} from "react-router-dom";

const OrderList = ({ordersIds, pathname}) => {
  const location = useLocation();
  return (
    <ul className={css.order_list}>
      {ordersIds.map((id) => (
        <Link className={'link'} key={id} to={
          {
            pathname: pathname.replace(':id', id),
            state: {background: location}
          }
        }>
          <li key={id} className={'mr-2'}>
            <Order orderId={id}></Order>
          </li>
        </Link>
      ))}
    </ul>
  );
};

/*
* {
            //pathname: routes.feedDetails.replace(':id', id),
            //state: {background: location}
          }*/

OrderList.propTypes = {
  ordersIds: PropTypes.arrayOf(PropTypes.string)
};

export default memo(OrderList);
