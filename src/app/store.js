import { configureStore } from "@reduxjs/toolkit";
import advocatesReducer from "../features/advocates/advocatesSlice";

export const store = configureStore({
  reducer: {
    advocates: advocatesReducer,
  },
});
