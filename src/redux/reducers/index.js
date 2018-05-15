import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from '../../components/user/user-reducer';
import testCompReducer from '../../components/testComp/test-comp-reducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  testComp: testCompReducer,
});
