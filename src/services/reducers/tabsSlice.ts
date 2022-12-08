import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IngredientType} from "../types/data";

export type TTabState = {
  selected: IngredientType,
  clicked: IngredientType,
  intersected: Record<IngredientType, boolean>
}

const initialState: TTabState = {
  selected: IngredientType.Bun,
  clicked: IngredientType.Bun,
  intersected: {
    bun: true,
    main: true,
    sauce: false
  }
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<IngredientType>) => {
      state.selected = action.payload;
      state.clicked = action.payload;
    },
    intersected: (state, action: PayloadAction<{ type: IngredientType, isIntersecting: boolean }>) => {
      state.intersected[action.payload.type] = action.payload.isIntersecting;

      if (!state.intersected.bun && !state.intersected.main && !state.intersected.sauce) {
        state.selected = IngredientType.Bun;
        return;
      }

      if (state.intersected.bun) {
        state.selected = IngredientType.Bun
      }

      if (!state.intersected.bun && !state.intersected.sauce) {
        state.selected = IngredientType.Main
      }

      if (state.intersected.sauce) {
        state.selected = IngredientType.Sauce
      }
    },
  }
})

export default tabsSlice.reducer;
