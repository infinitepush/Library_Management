import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { LayoutDashboard, Users, History, Settings, BarChart } from 'lucide-react';

const adminMenuItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart },
  { path: '/admin/users', label: 'User Management', icon: Users },
  { path: '/admin/audit', label: 'Audit Logs', icon: History },
  { path: '/admin/settings', label: 'Settings', icon: Settings }
];

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar menuItems={adminMenuItems} />
      <div className="flex-1 flex flex-col">
        <Navbar title="Admin Portal" />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};