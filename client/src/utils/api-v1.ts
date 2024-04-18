/* API v1 */

import axios, { AxiosRequestConfig } from 'axios';
import { UserSession } from './types';
import { API_ENDPOINTS } from './constants';

const ReqConf: AxiosRequestConfig = {
  withCredentials: true,
};

export const getAuthSession = async () =>
  await axios.get<UserSession>(API_ENDPOINTS.AUTH_STATUS, ReqConf);
