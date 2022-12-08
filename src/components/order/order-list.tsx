import React, {FC, memo} from 'react';
import css from './order.module.css'
import Order from "./order";
import {Link, useLocation} from "react-router-dom";

type TOrderListProps = {
  ordersIds: string[],
  pathname: string
}

const OrderList: FC<TOrderListProps> = ({ordersIds, pathname}) => {
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

export default memo(OrderList);
