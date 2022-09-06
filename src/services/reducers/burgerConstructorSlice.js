import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  bun: {},
  ingredients: []
}

export const burgerConstructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    remove: (state, action) => {
      state.ingredients.splice(action.payload, 1)
    },
    add: (state, action) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    move: (state, action) => {
      const {dragIndex, hoverIndex} = action.payload;
      state.ingredients.splice(hoverIndex, 0, state.ingredients.splice(dragIndex, 1)[0])
    }
  }
})

export default burgerConstructorSlice.reducer;
