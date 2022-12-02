import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/ingredientsSlice";
import tabsReducer from './reducers/tabsSlice'
import constructorReducer from './reducers/burgerConstructorSlice'
import orderReducer from './reducers/create-order-slice'
import authSlice from "./reducers/authSlice";
import passwordSlice from "./reducers/passwordSlice";
import webSocketMiddleware from "./middleware/webSocketMiddleware";
import config from "../api/config";
import wsFeedSlice from "./reducers/web-socket/ws-feed-slice";
import ordersReducer from "./reducers/orders-slice";
import {WsType} from "../types/wsType";
import wsOrdersSlice from "./reducers/web-socket/ws-orders-slice";
import wsConfig from "./reducers/web-socket";

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

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
      .concat(webSocketMiddleware(config.wsPublicUrl, wsConfig[WsType.Feed]))
      .concat(webSocketMiddleware(config.wsPrivateUrl, wsConfig[WsType.Orders], config.tokenStorage.getAccessToken))
  })
}

export const store = setupStore();
