import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
