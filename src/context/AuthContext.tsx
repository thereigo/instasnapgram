import { IContextType, IUser } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react'
import { set } from 'zod';

export const INITIAL_USER = {
    id: '',
    email: '',
    name: '',
    username: '',
    imageUrl: '',
    bio: '',
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuthenticated: false,
    isLoading: false,
    setUser:  () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode}) => {
  const[ user, setUser ] = useState<IUser>(INITIAL_USER);
  const[ isLoading, setIsLoading ] = useState(false);
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext