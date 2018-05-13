import { loggerMiddleware } from './logger-middleware';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  loggerMiddleware,
  sagaMiddleware,
];

export { sagaMiddleware };
export default middlewares;
