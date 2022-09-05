export const groupBy = (arr, key) => {
  return arr.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


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

export const getFakeConstructor = data => {
  const [bun] = data.filter(x => x.type === 'bun');
  const items = data.filter(x => x.type !== 'bun');

  const ingredients = items.sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * items.length) + 3);

  return {
    bun: bun,
    ingredients: ingredients
  }
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

