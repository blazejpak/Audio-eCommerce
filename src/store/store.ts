import { configureStore } from "@reduxjs/toolkit";
import activePageSlice from "./reducers/navigationActive";

export const store = configureStore({
  reducer: {
    activePageSlice: activePageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
