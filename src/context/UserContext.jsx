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
  const [currentRole, setCurrentRole] = useState(() => {
    try {
      const stored = localStorage.getItem('lm_currentRole');
      return stored ? stored : null;
    } catch (e) {
      return null;
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('lm_currentUser');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  });

  const selectRole = (role) => {
    setCurrentRole(role);
    try { localStorage.setItem('lm_currentRole', role); } catch {}
    // Set a mock user based on role for quick dev fallback
    const user = mockUsers.find(u => u.role === role);
    setCurrentUser(user || null);
    try { localStorage.setItem('lm_currentUser', JSON.stringify(user || null)); } catch {}
  };

  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Login failed' }));
      const message = err && err.message ? err.message : 'Login failed';
      throw new Error(message);
    }

    const data = await res.json();

    // Save token + user
    try { localStorage.setItem('lm_token', data.token); } catch {}
    setCurrentRole(data.role);
    setCurrentUser({ _id: data._id, name: data.name, email: data.email, role: data.role });
    try {
      localStorage.setItem('lm_currentRole', data.role);
      localStorage.setItem('lm_currentUser', JSON.stringify({ _id: data._id, name: data.name, email: data.email, role: data.role }));
    } catch (e) {}

    return data;
  };

  const logout = () => {
    setCurrentRole(null);
    setCurrentUser(null);
    try {
      localStorage.removeItem('lm_token');
      localStorage.removeItem('lm_currentRole');
      localStorage.removeItem('lm_currentUser');
    } catch (e) {}
  };

  return (
    <UserContext.Provider value={{ currentRole, currentUser, selectRole, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};