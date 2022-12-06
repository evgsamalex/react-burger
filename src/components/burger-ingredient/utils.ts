import {RootState} from "../../services/types";

export const ingredientCountSelector = (state: RootState, id: string) => {
  const {bun, ingredients} = state.burgerConstructor;

  if (ingredients.length === 0) return 0;

  if (bun && bun._id === id) return 1;

  return ingredients.filter(x => x._id === id).length;
}
