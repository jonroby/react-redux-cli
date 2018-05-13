import userQuery from './user-query';
import { query } from '../api';

// let queries = [
//   userQuery
// ].map(q => query(q));

let queries = {
  userQuery: query(userQuery),
}

export default queries;
