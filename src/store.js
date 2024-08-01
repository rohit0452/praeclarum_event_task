import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/events.slice";

const store = configureStore({
  reducer: {
    addevent: eventReducer,
  },
});

export default store;
