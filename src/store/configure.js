import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import mainReducer from "../reducers/";

// This
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["bgg"]
  // stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  bgg: mainReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
