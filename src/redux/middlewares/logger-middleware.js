import { createLogger } from 'redux-logger';

let loggerMiddleware = createLogger();

// if (process.env.NODE_ENV === `development`) {
//   loggerMiddleware = createLogger({
//     stateTransformer,
//   });
// }

export { loggerMiddleware };
