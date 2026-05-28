import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { kinopoiskapi } from "../services/api";
import { searchQuerySlice } from "../features/searchQuerySlice";
import { fastapi } from "../services/myapi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchQuery: searchQuerySlice.reducer,
    [kinopoiskapi.reducerPath]: kinopoiskapi.reducer,
    [fastapi.reducerPath]: fastapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskapi.middleware, fastapi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
