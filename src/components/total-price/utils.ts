import {RootState} from "../../services/types";

export const totalPriceSelector = (state: RootState) => {
  const {bun, ingredients} = state.burgerConstructor;
  if (!bun) {
    return 0;
  }

  return ingredients.reduce((partialSum, a) => partialSum + a.price, 0) + bun.price * 2;
}
