"use client"
import { isNull } from 'lodash';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define types for user information
interface UserInfo {
  name: string;
  email: string;
  picture: string,
  role: string
}

// Define types for authentication context
interface AuthContextType {
  userInfo: UserInfo | null;
  token: string | null;
  login: (userInfo: UserInfo, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth context is not used correctly!');
  }
  return context;
};

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Simulated login check on component mount
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    const storedToken = localStorage.getItem('token');
    if (storedUserInfo && storedToken) {
      setUserInfo(JSON.parse(storedUserInfo));
      setToken(storedToken);
    }
  }, []);

  const login = (userInfo: UserInfo, token: string) => {
    if (!userInfo || !token) return;
    setUserInfo(userInfo);
    setToken(token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUserInfo(null);
    setToken(null);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ userInfo, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};