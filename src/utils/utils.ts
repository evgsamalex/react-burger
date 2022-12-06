import {TBurgerConstructor, TCategory, TIngredient, IngredientType} from "../services/types/data";

const categoryNames: Record<IngredientType, string> = {
  bun: "Булки",
  main: "Начинки",
  sauce: "Соусы"
}

export const getCategoryName = (type: IngredientType) => {
  const name = categoryNames[type];
  return name ? name : "undefined";
}

export const getCategories = (items: Array<TIngredient>): Array<TCategory> => {
  return items
    .map(item => item.type)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(type => {
      return {type, name: getCategoryName(type)}
    })
}

export const selectIngredientsIds = (constructor: TBurgerConstructor): Array<string> => {
  const result = constructor.bun ? [constructor.bun._id] : [];
  constructor.ingredients.forEach(x => {
    result.push(x._id);
  })
  if (constructor.bun)
    result.push(constructor.bun._id)

  return result;
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export const isNullOrEmpty = (obj: object) => {
  if (obj === null) return true;

  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  return (Object.keys(obj).length === 0 && obj.constructor === Object);
}

