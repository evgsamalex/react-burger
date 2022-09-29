export const toOrderDate = (date) => {
  return new Date(date).toUTCString();
}

export const toOrderStatus = (status) => {
  switch (status) {
    case 'created':
      return 'Создан';
    case 'pending':
      return 'Готовится';
    case 'done':
      return 'Выполнен';
    case 'cancel':
      return 'Отменен';
    default:
      return '';
  }
}

export const totalPriceByIngredients = (ingredients) => {
  console.log('totPrice')
  return ingredients.reduce((partialSum, a) => partialSum + a.price, 0);
}

export const ingredientsSelector = (ids) => state => {
  const {items} = state.ingredients;
  return items.filter(x => ids.includes(x._id))
}

export const orderSelector = id => state => state.wsFeed.orders[id];
