import { configureStore } from "@reduxjs/toolkit";

// reducers
import site from "./site";
import user from "./user"

const store = configureStore({
  reducer: {
    site,
    user
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
