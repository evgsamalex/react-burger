import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Scroll from "../../components/scroll/scroll";
import {wsFeedSlice} from "../../services/reducers/wsFeedSlice";
import Loading from "../../components/loading/loading";
import PageContent from "../../components/page-content/page-content";
import DisplayError from "../../components/error/display-error";
import Main from "../../components/main/main";
import OrderList from "../../components/order/order-list";

const Feed = () => {

  const {connected, orderIds, error} = useSelector(state => state.wsFeed);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!connected) {
      dispatch(wsFeedSlice.actions.start());
    }
    return () => {
      dispatch(wsFeedSlice.actions.stop())
    }
  }, [])

  if (!connected || orderIds.length === 0) {
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
          <OrderList ordersIds={orderIds}/>
        </Scroll>
        <div>
          jfdksjflksjdlfjslkfjslk
        </div>
      </Main>
    </div>
  );
};

export default Feed;
