import { createContext, useContext, useState } from 'react';
import { mockUsers } from '../data/mockData';
import { UserRole } from '../constants/enums';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const selectRole = (role) => {
    setCurrentRole(role);
    // Set a mock user based on role
    const user = mockUsers.find(u => u.role === role);
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentRole(null);
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentRole, currentUser, selectRole, logout }}>
      {children}
    </UserContext.Provider>
  );
};