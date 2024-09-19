import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./API/authAPI";
import { realEstateApi } from "./API/TestAPI";
import { cardApi } from "./API/cardAPI";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [realEstateApi.reducerPath]: realEstateApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, realEstateApi.middleware, cardApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
