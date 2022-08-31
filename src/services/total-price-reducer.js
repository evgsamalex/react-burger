const actionTypes = {
  set: 'SET',
  reset: 'RESET'
}

export const initialValue = {
  price: 0
}

export const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.set:
      const sum = action.payload.ingredients.reduce((partialSum, a) => partialSum + a.price, 0) + action.payload.bun.price * 2;
      return {price: sum};
    case actionTypes.reset: {
      return initialValue;
    }
  }
}

export const setPriceAction = (constructor) => {
  return {type: actionTypes.set, payload: constructor}
}

export const resetPriceAction = () => {
  return {type: actionTypes.reset}
}

