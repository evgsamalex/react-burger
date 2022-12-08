import {createSelector} from "@reduxjs/toolkit";
import {OrderStatus, TIngredient} from "../../../services/types/data";
import {RootState} from "../../../services/types";

export const toOrderDate = (date: string) => {
  return new Date(date).toLocaleString('ru-Ru');
}

export const toOrderStatus = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Created:
      return 'Создан';
    case OrderStatus.Pending:
      return 'Готовится';
    case OrderStatus.Done:
      return 'Выполнен';
    default:
      return '';
  }
}

export const orderSelector = (id: string) => (state: RootState) => state.orders.orders[id];

const ingredients = (state: RootState) => state.ingredients.items;
const ingredientsIds = (ids: string[]) => (state: RootState) => ids;

export type TOrderIngredients = {
  ingredients: {
    [key: string]: {
      ingredient: TIngredient;
      count: number,
    }
  };
  totalPrice: number;
}

export const ingredientsSelector = (ids: string[]) => createSelector(
  [ingredients, ingredientsIds(ids)],
  (items, ids) => {
    console.log('ingredients selector');
    const result: TOrderIngredients = {
      ingredients: {},
      totalPrice: 0
    };
    ids.forEach((id: string) => {
      const ingredient = items.find(x => x._id === id);
      if (ingredient) {
        if (!result.ingredients[id]) {
          result.ingredients[id] = {ingredient: ingredient, count: 0};
        }
        result.ingredients[id].count++;
        result.totalPrice += ingredient.price;
      }
    })
    return result;
  })
