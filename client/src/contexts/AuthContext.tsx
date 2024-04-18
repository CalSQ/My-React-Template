/* Session management context */

import { ReactNode, createContext } from 'react';
import { UserSession } from '../utils/types';
import { FetchAuthSession } from '../queries/FetchAuthSession';

type AuthContextValue = {
  auth: UserSession | undefined;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue>({
  auth: undefined,
  handleLogin: async () => {},
  handleLogout: async () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = FetchAuthSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        auth: data?.data,
        handleLogin: async () => {
          console.log('Login');
        },
        handleLogout: async () => {
          console.log('Logout');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
