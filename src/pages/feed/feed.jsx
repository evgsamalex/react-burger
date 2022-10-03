import React from 'react';
import {useSelector} from "react-redux";
import Scroll from "../../components/scroll/scroll";
import Loading from "../../components/loading/loading";
import PageContent from "../../components/page-content/page-content";
import DisplayError from "../../components/error/display-error";
import Main from "../../components/main/main";
import OrderList from "../../components/order/order-list";
import {useFeed} from "../../hooks/useFeed";
import {wsFeedActions, stateSelector} from "../../services/reducers/web-socket/ws-feed-slice";
import {routes} from "../../utils/routes";
import OrdersSummary from "../../components/orders-summary/orders-summary";

const Feed = () => {

  const {connected, error} = useFeed(wsFeedActions, stateSelector);

  const {feedIds} = useSelector(state => state.orders);

  if (!connected || feedIds.length === 0) {
    return (<PageContent><Loading/></PageContent>)
  }

  if (error) {
    return (<PageContent><DisplayError error={error}/></PageContent>)
  }

  return (
    <div className={'center columns w100 h100 max_content'}>
      <h2 className={'text text_type_main-large text_color_primary text_left w100 mt-10 mb-5'}>Лента заказов</h2>
      <Main>
        <Scroll>
          <OrderList ordersIds={feedIds} pathname={routes.feedDetails}/>
        </Scroll>
        <div>
          <OrdersSummary orderIds={feedIds}/>
        </div>
      </Main>
    </div>
  );
};

export default Feed;
