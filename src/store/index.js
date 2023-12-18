// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducer.js";
// import { thunk } from "redux-thunk";

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// })

// import { configureStore } from "@reduxjs/toolkit";
// import { productsReducer } from "./productsSlice";

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productsReducer } from "./productsSlice";

const productssPersistConfig = {
  key: "products",
  storage,
  whitelist: ["favorite",],
};

export const store = configureStore({
  reducer: {
    products: persistReducer(productssPersistConfig, productsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);