import todoReducer from "./todoReducer";
import categoryReducer from "./categoryReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  //reducerlar birleştirilir
  todoReducer,
  categoryReducer,
});
const store = createStore(rootReducer); //store oluşturılur
export default store; // store export edilir.
