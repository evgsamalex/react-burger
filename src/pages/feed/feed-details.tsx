import React, {FC} from 'react';
import {useFeed} from "../../hooks/useFeed";
import {useParams} from "react-router-dom";
import PageContent from "../../components/page-content/page-content";
import Loading from "../../components/loading/loading";
import OrderDetails from "../../components/order/order-details";
import DisplayError from "../../components/error/display-error";
import {wsFeedActions, stateSelector} from "../../services/reducers/web-socket/ws-feed-slice";
import {useSelector} from "react-redux";
import {orderSelector} from "../../components/order/lib";

const FeedDetails: FC<{ disposeFeed?: boolean }> = ({disposeFeed = true}) => {

  const {id} = useParams<{ id: string }>();

  const {connected, error} = useFeed(wsFeedActions, stateSelector, disposeFeed);

  const order = useSelector(orderSelector(id));

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

  if (!order) {
    return <PageContent><DisplayError error={'Заказ не найден'}/></PageContent>
  }

  return (
    <PageContent>
      <OrderDetails order={order}/>
    </PageContent>
  );
};

export default FeedDetails;
