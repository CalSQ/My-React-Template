/* Fetch session details */

import { useQuery } from '@tanstack/react-query';
import { getAuthSession } from '../utils/api-v1';

export const FetchAuthSession = () =>
  useQuery({
    queryKey: ['authstatus'],
    queryFn: getAuthSession,
    retry: 0,
  });
