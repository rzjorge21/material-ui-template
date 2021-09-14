import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { multiClientMiddleware } from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./ducks";
import { authReducer } from "./ducks/user";
import { createLogger, authMiddleware } from "./middlewares";
import { axiosConfig } from "./config";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export default function getConfigureStore(initialState, config) {
  const rootReducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  let appReducer = rootReducer;
  if (config.usePersist) {
    appReducer = persistedReducer;
  }
  const rootAppReducer = authReducer(appReducer);

  const store = configureStore({
    reducer: rootAppReducer,
    middleware: (getDefaultMiddleware) =>
      [].concat(
        multiClientMiddleware(axiosConfig),
        authMiddleware(),
        createLogger(config.useLogger)
      ),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState,
  });

  //   const store = createStore(
  //       rootAppReducer,
  //       initialState,
  //       composeWithDevTools(
  //           applyMiddleware(
  //               multiClientMiddleware(axiosConfig),
  //               thunkMiddleware,
  //               authMiddleware(),
  //               createLogger(config.useLogger)

  //           )
  //       )
  //   );

  const persistor = persistStore(store, null, () => {
    if (config.useLogger) {
      console.log("REHYDRATED");
    }
  });

  //persistor.purge() //TO clean state.

  return { store, persistor };
}
