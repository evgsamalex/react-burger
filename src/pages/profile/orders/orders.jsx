import React from 'react';
import {useFeed} from "../../../hooks/useFeed";
import {useSelector} from "react-redux";
import PageContent from "../../../components/page-content/page-content";
import Loading from "../../../components/loading/loading";
import DisplayError from "../../../components/error/display-error";
import {wsOrdersActions, stateSelector} from "../../../services/reducers/web-socket/ws-orders-slice";
import OrderList from "../../../components/order/order-list";
import Scroll from "../../../components/scroll/scroll";
import css from './orders.module.css';
import {routes} from "../../../utils/routes";

const Orders = () => {

  const {connected, error} = useFeed(wsOrdersActions, stateSelector);

  const {orderIds} = useSelector(state => state.orders);

  if (!connected || orderIds.length === 0) {
    return (<PageContent><Loading/></PageContent>)
  }

  if (error) {
    return (<PageContent><DisplayError error={error}/></PageContent>)
  }

  return (
    <div className={css.orders + ' mt-10'}>
      <Scroll>
        <OrderList ordersIds={orderIds} pathname={routes.orderDetails}/>
      </Scroll>
    </div>
  );
};

export default Orders;
