const categoryNames = {'bun': 'Булки', 'sauce': 'Соусы', 'main': 'Начинки'}

export const getCategoryName = type => {
  const name = categoryNames[type];
  return name ? name : "undefined";
}

export const getCategories = (items) => {
  return items
    .map(item => item.type)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(type => {
      return {type, name: getCategoryName(type)}
    })
}

export const selectIngredientsIds = constructor => {
  const result = [constructor.bun._id];
  constructor.ingredients.forEach(x => {
    result.push(x._id);
  })
  result.push(constructor.bun._id)

  return result;
}

export const delay = ms => new Promise(res => setTimeout(res, ms))

export const isNullOrEmpty = obj => {
  if (obj === null) return true;

  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  return (Object.keys(obj).length === 0 && obj.constructor === Object);
}

