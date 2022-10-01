import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import tabsReducer from './tabsSlice'
import constructorReducer from './burgerConstructorSlice'
import orderReducer from './create-order-slice'
import authSlice from "./authSlice";
import passwordSlice from "./passwordSlice";
import webSocketMiddleware from "../middleware/webSocketMiddleware";
import config from "../../api/config";
import wsFeedSlice from "./web-socket/ws-feed-slice";
import ordersReducer from "./orders-slice";
import {WsType} from "../../types/wsType";
import wsOrdersSlice from "./web-socket/ws-orders-slice";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  tabs: tabsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  auth: authSlice,
  password: passwordSlice,
  wsFeed: wsFeedSlice,
  wsOrders: wsOrdersSlice,
  orders: ordersReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
      .concat(webSocketMiddleware(config.wsPublicUrl, WsType.Feed))
      .concat(webSocketMiddleware(config.wsPrivateUrl, WsType.Orders, config.tokenStorage.getAccessToken))
  })
}
