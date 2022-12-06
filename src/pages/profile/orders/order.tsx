import React from 'react';
import {useParams} from "react-router-dom";
import {useFeed} from "../../../hooks/useFeed";
import {orderSelector} from "../../../components/order/lib";
import PageContent from "../../../components/page-content/page-content";
import Loading from "../../../components/loading/loading";
import DisplayError from "../../../components/error/display-error";
import {stateSelector, wsOrdersActions} from "../../../services/reducers/web-socket/ws-orders-slice";
import OrderDetails from "../../../components/order/order-details";
import {useAppSelector} from "../../../services/hooks";

const Order = ({disposeFeed = true}) => {

  const {id} = useParams<{ id: string }>();

  const {connected, error} = useFeed(wsOrdersActions, stateSelector, disposeFeed);

  const order = useAppSelector(orderSelector(id));

  if (!connected) {
    return (
      <PageContent><Loading/></PageContent>
    )
  }

  if (error) {
    return (
      <PageContent><DisplayError error={error}/></PageContent>
    )
  }

  if (connected && !order) {
    return <PageContent><DisplayError error={'Заказ не найден'}/></PageContent>
  }

  return (
    <PageContent>
      <OrderDetails order={order}/>
    </PageContent>
  );
};

export default Order;
