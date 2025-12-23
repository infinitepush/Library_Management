import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { LayoutDashboard, Search, FileText, Bell } from 'lucide-react';

const studentMenuItems = [
  { path: '/student', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/student/search', label: 'Book Search', icon: Search },
  { path: '/student/requests', label: 'My Requests', icon: FileText },
  { path: '/student/notifications', label: 'Notifications', icon: Bell }
];

export const StudentLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar menuItems={studentMenuItems} />
      <div className="flex-1 flex flex-col">
        <Navbar title="Student Portal" />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};