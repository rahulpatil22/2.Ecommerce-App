// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import category from "../reducers/category";
const rootReducer = combineReducers({
  categories: category,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
declare global {
  type RootState = ReturnType<typeof store.getState>;
}
declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
export default store;
