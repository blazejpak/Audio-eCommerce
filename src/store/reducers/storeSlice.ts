import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface typeData {
  data: Array<any>;
}

const initialState: typeData = {
  data: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    data: (state) => {
      state.data;
    },
    dispatchData: (state, action: PayloadAction<any>) => {
      state.data = [...state.data, action.payload];
    },
    updateData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
});

export default storeSlice.reducer;
