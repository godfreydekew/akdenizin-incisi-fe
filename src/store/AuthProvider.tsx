import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('accessToken'); 
  });

  const isAuthenticated = !!accessToken;

  const login = (token: string) => {
    localStorage.setItem('accessToken', token); 
    setAccessToken(token);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
