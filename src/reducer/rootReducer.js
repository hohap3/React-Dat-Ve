import { combineReducers } from "redux";
import chairReducer from "./chairReducer";

const rootReducer = combineReducers({
  chair: chairReducer,
});

export default rootReducer;
