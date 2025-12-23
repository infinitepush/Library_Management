import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { LayoutDashboard, Package, DollarSign, Bell } from 'lucide-react';

const librarianMenuItems = [
  { path: '/librarian', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/librarian/inventory', label: 'Inventory', icon: Package },
  { path: '/librarian/fines', label: 'Fine Management', icon: DollarSign },
  { path: '/librarian/notifications', label: 'Notifications', icon: Bell }
];

export const LibrarianLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar menuItems={librarianMenuItems} />
      <div className="flex-1 flex flex-col">
        <Navbar title="Librarian Portal" />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};