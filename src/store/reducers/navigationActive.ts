import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ActivePage {
  active: string;
  menuActive: boolean;
}

const initialState: ActivePage = {
  active: "home",
  menuActive: false,
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
  },
});

export const { data, menuActive } = activePageSlice.actions;

export default activePageSlice.reducer;
