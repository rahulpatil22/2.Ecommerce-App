import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
// import {  persistReducer } from "redux-persist";
import { persistStore, persistReducer } from "redux-persist";
// import {  persistReducer } from "redux-persist";
import tab from "../reducers/tab";
import product from "../reducers/product";

// store.js= state stored here
const rootReducer = combineReducers({
  tabs: tab,
  products: product
  //using this tabs we call store inside the AddTab using useSelector
  //in tabs we can store our state in the tab.tsx(reducer)
});
//redux thunk is allow  to do nested arrow function
// and  allow us to write actionCreators that returns a function instead of an action
const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["tabs","products"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

// export {store};


declare global {
  type RootState = ReturnType<typeof store.getState>;
}
declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}






// export default { store, persistor };