/* Constants */

export const BASE_ENDPOINT: string =
  process.env.REACT_APP_NODE_ENV === 'development'
    ? 'http://localhost:6001/api/'
    : 'https://istealbabiesfor.fun/api/';

export const API_ENDPOINTS = {
  AUTH_LOGIN: BASE_ENDPOINT + 'auth/login',
  AUTH_STATUS: BASE_ENDPOINT + 'auth/status',
  AUTH_REVOKE: BASE_ENDPOINT + 'auth/revoke',
  AUTH_REDIRECT: BASE_ENDPOINT + 'auth/redirect',
};
