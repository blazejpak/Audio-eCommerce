import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ActivePage {
  active: string;
}

const initialState: ActivePage = {
  active: "home",
};

export const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { data } = activePageSlice.actions;

export default activePageSlice.reducer;
