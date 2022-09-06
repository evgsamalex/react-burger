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
      console.log(action.payload);
      state.ingredients = state.ingredients.filter(x => x.uuid !== action.payload)
    },
    add: (state, action) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    move: (state, action) => {
      const {dragUuid, hoverUuid} = action.payload;
      const hoverIndex = state.ingredients.findIndex(x => x.uuid === hoverUuid);
      const dragIndex = state.ingredients.findIndex(x => x.uuid === dragUuid);

      state.ingredients.splice(hoverIndex, 0, state.ingredients.splice(dragIndex, 1)[0])
    },
    clear: (state) => {
      return initialState;
    }
  }
})

export default burgerConstructorSlice.reducer;
