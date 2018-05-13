import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import middlewares, { sagaMiddleware } from './middlewares/index';
import rootSaga from './sagas';

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
