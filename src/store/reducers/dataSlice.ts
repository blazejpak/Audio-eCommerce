import { createSlice } from "@reduxjs/toolkit";

import data from "../../data/data.json";

export interface typeData {
  data: Array<any>;
}

const initialState: typeData = {
  data: data,
};

export const getDataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    data: (state) => {
      state.data;
    },
  },
});

export default getDataSlice.reducer;
