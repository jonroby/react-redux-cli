import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import user2Reducer from "./user2-reducer";
export default combineReducers({
  router: routerReducer,
  user2: user2Reducer
});