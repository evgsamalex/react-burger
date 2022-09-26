import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import tabsReducer from './tabsSlice'
import constructorReducer from './burgerConstructorSlice'
import orderReducer from './orderSlice'
import authSlice from "./authSlice";
import passwordSlice from "./passwordSlice";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  tabs: tabsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  auth: authSlice,
  password: passwordSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
