import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import tabsReducer from './tabsSlice'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  tabs: tabsReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
