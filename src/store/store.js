import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: [thunk],
});
export default store;
