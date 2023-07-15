import { configureStore } from "@reduxjs/toolkit";

// reducers
import site from "./site";

const store = configureStore({
  reducer: {
    site,
  },
});
export default store;
