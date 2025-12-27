import { useNavigate } from 'react-router-dom';
import { Library, User, Package, Shield } from 'lucide-react';
import { UserRole } from '../constants/enums';

export default function Landing() {
  const navigate = useNavigate();
  const roles = [
    {
      role: UserRole.STUDENT,
      title: 'Student Portal',
      description: 'Search books, manage requests, and track your borrowed items',
      icon: User,
      color: 'from-blue-500 to-indigo-600',
      path: '/login/student'
    },
    {
      role: UserRole.LIBRARIAN,
      title: 'Librarian Portal',
      description: 'Manage inventory, process requests, and handle fines',
      icon: Package,
      color: 'from-purple-500 to-pink-600',
      path: '/login/librarian'
    },
    {
      role: UserRole.ADMIN,
      title: 'Admin Portal',
      description: 'Oversee operations, manage users, and view analytics',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      path: '/login/admin'
    }
  ];
  
  const handleRoleSelect = (_role, path) => {
    // Navigate to the role-specific login page. Role will be set after successful login.
    navigate(path);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-indigo-600 rounded-xl">
              <Library size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Digital Library Management
          </h1>
          <p className="text-xl text-gray-400">
            Select your role to access the portal
          </p>
        </div>
        
        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((roleItem) => {
            const Icon = roleItem.icon;
            return (
              <button
                key={roleItem.role}
                onClick={() => handleRoleSelect(roleItem.role, roleItem.path)}
                className="group relative bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-left"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${roleItem.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${roleItem.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {roleItem.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {roleItem.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-indigo-400 font-medium group-hover:text-indigo-300">
                    <span>Access Portal</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © 2025 LibraryHub - Digital-First Library Management System
          </p>
        </div>
      </div>
    </div>
  );
};