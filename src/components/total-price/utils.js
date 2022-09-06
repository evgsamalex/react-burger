import {isNullOrEmpty} from "../../utils/utils";

export const totalPriceSelector = state => {
  const {bun, ingredients} = state.burgerConstructor;
  if (isNullOrEmpty(bun)) {
    return 0;
  }

  return ingredients.reduce((partialSum, a) => partialSum + a.price, 0) + bun.price * 2;
}
