import {createSelector} from "@reduxjs/toolkit";
import {OrderStatus} from "../../../types/OrderStatus";

export const toOrderDate = (date) => {
  return new Date(date).toLocaleString('ru-Ru');
}

export const toOrderStatus = (status) => {
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

export const orderSelector = id => state => state.orders.orders[id];

const ingredients = state => state.ingredients.items;
const ingredientsIds = ids => state => ids;

export const ingredientsSelector = (ids) => createSelector(
  [ingredients, ingredientsIds(ids)],
  (items, ids) => {
    console.log('ingredients selector');
    const result = {};
    let price = 0;
    ids.forEach(id => {
      if (!result[id]) {
        result[id] = {ingredient: items.find(x => x._id === id), count: 0};
      }
      result[id].count++;
      price += result[id].ingredient.price;
    })
    return {ingredients: result, totalPrice: price};
  })

export class ingredientsSelector1 {
}
