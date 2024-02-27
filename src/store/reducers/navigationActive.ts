import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ActivePage {
  active: string;
  menuActive: boolean;
  cartActive: boolean;
}

const initialState: ActivePage = {
  active: "home",
  menuActive: false,
  cartActive: false,
};

export const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
    menuActive: (state) => {
      state.menuActive = !state.menuActive;
    },
    cartActive: (state, action) => {
      state.cartActive = action.payload;
    },
  },
});

export const { data, menuActive } = activePageSlice.actions;

export default activePageSlice.reducer;
