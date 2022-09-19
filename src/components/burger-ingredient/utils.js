import {isNullOrEmpty} from "../../utils/utils";

export const ingredientCountSelector = (state, id) => {
  const {bun, ingredients} = state.burgerConstructor;

  if (ingredients.length === 0) return 0;

  if (!isNullOrEmpty(bun) && bun._id === id) return 1;

  return ingredients.filter(x => x._id === id).length;
}
