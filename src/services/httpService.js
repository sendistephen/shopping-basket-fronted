import axios from 'axios';
import logger from './logService';

/**
 * Component for handling API calls without creating duplicates
 * Here we create a new axios instance with a custom config
 */

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 9000
});
/**
 * Declare a response interceptor.
 * This allows us to transform the responses from a
 *  server on their way back to the application...
 */
instance.interceptors.response.use(null, ex => {
  if (ex.response) {
    //   handle response error
    logger.error(ex.response.data);
  } else {
    logger.error(ex.message);
  }
  return Promise.reject(ex);
});

function jwtSetUp(jwt) {
  instance.defaults.headers.common['x-auth-token'] = jwt;
}
export default {
  jwtSetUp,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
};
