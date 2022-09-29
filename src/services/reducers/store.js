import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import tabsReducer from './tabsSlice'
import constructorReducer from './burgerConstructorSlice'
import orderReducer from './orderSlice'
import authSlice from "./authSlice";
import passwordSlice from "./passwordSlice";
import webSocketMiddleware from "../middleware/webSocketMiddleware";
import wsFeedSlice, {wsFeedActions} from "./wsFeedSlice";
import config from "../../api/config";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  tabs: tabsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  auth: authSlice,
  password: passwordSlice,
  wsFeed: wsFeedSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
      .concat(webSocketMiddleware(config.wsPublicUrl, wsFeedActions))
    //.concat(webSocketMiddleware(config.wsPrivateUrl, wsFeedActions, config.tokenStorage.getAccessToken))
  })
}
