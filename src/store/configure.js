import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mainReducer from "../reducers/";
// import authReducer from "./modules/auth";

// This
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["bgg"]
};

const rootReducer = combineReducers({
  bgg: mainReducer
  // counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
