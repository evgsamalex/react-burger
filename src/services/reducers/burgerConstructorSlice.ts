import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TBurgerConstructor, TBurgerConstructorItem} from "../types/data";

const initialState: TBurgerConstructor = {
  bun: null,
  ingredients: []
}

export const burgerConstructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(x => x.uuid !== action.payload)
    },
    add: (state, action: PayloadAction<TBurgerConstructorItem>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    move: (state, action: PayloadAction<{ dragUuid: string, hoverUuid: string }>) => {
      const {dragUuid, hoverUuid} = action.payload;
      const hoverIndex = state.ingredients.findIndex(x => x.uuid === hoverUuid);
      const dragIndex = state.ingredients.findIndex(x => x.uuid === dragUuid);

      state.ingredients.splice(hoverIndex, 0, state.ingredients.splice(dragIndex, 1)[0])
    },
    clear: (state) => {
      return {...initialState};
    }
  }
})

export default burgerConstructorSlice.reducer;
