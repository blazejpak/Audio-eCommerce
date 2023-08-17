import { configureStore } from "@reduxjs/toolkit";
import activePageSlice from "./reducers/navigationActive";
import dataSlice from "./reducers/dataSlice";
import storeSlice from "./reducers/storeSlice";

export const store = configureStore({
  reducer: {
    activePageSlice: activePageSlice,
    dataSlice: dataSlice,
    storeSlice: storeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
