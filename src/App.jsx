import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import { Landing } from './pages/Landing';

// Layouts
import { StudentLayout } from './components/layout/StudentLayout';
import { LibrarianLayout } from './components/layout/LibrarianLayout';
import { AdminLayout } from './components/layout/AdminLayout';

// Student Pages
import { StudentDashboard } from './pages/student/StudentDashboard';
import { BookSearch } from './pages/student/BookSearch';
import { MyRequests } from './pages/student/MyRequests';
import { Notifications as StudentNotifications } from './pages/student/Notifications';

// Librarian Pages
import { LibrarianDashboard } from './pages/librarian/LibrarianDashboard';
import { Inventory } from './pages/librarian/Inventory';
import { FineManagement } from './pages/librarian/FineManagement';
import { LibrarianNotifications } from './pages/librarian/LibrarianNotifications';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Analytics } from './pages/admin/Analytics';
import { UserManagement } from './pages/admin/UserManagement';
import { AuditLogs } from './pages/admin/AuditLogs';
import { Settings } from './pages/admin/Settings';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const { currentRole } = useUser();
  
  if (!currentRole) {
    return <Navigate to="/" replace />;
  }
  
  if (allowedRole && currentRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      {/* Student Routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="search" element={<BookSearch />} />
        <Route path="requests" element={<MyRequests />} />
        <Route path="notifications" element={<StudentNotifications />} />
      </Route>
      
      {/* Librarian Routes */}
      <Route
        path="/librarian"
        element={
          <ProtectedRoute allowedRole="librarian">
            <LibrarianLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<LibrarianDashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="fines" element={<FineManagement />} />
        <Route path="notifications" element={<LibrarianNotifications />} />
      </Route>
      
      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="audit" element={<AuditLogs />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;