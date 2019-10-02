import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import calculatorReducer from "../redux/reducers/calculator";

export default () => {
  return createStore(calculatorReducer, applyMiddleware(thunk));
};
