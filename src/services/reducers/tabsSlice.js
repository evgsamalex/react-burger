import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selected: 'bun',
  clicked: 'bun',
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
    select: (state, action) => {
      state.selected = action.payload;
      state.clicked = action.payload;
    },
    intersected: (state, action) => {
      state.intersected[action.payload.type] = action.payload.isIntersecting;
      if (state.intersected.bun) {
        state.selected = 'bun'
      }

      if (!state.intersected.bun && !state.intersected.sauce) {
        state.selected = 'main'
      }

      if (state.intersected.sauce) {
        state.selected = 'sauce'
      }
    }
  }
})

export default tabsSlice.reducer;
