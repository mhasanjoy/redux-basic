import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //   devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
