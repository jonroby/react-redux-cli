import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user-reducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
});
