import { StatCard } from '../../components/shared/Card';
import { BookOpen, Users, DollarSign, AlertCircle } from 'lucide-react';
import { mockAnalytics } from '../../data/mockData';
import { formatNumber, formatCurrency } from '../../utils/formatters';

export const AdminDashboard = () => {
  const { totalBooks, totalUsers, booksIssued, overdueBooks, totalFines, paidFines } = mockAnalytics;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Overview of library operations and statistics</p>
      </div>
      
      {/* Primary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Books"
          value={formatNumber(totalBooks)}
          icon={BookOpen}
          color="primary"
          trend="up"
          trendValue="+8% from last month"
        />
        <StatCard
          title="Total Users"
          value={formatNumber(totalUsers)}
          icon={Users}
          color="info"
          trend="up"
          trendValue="+12 new users"
        />
        <StatCard
          title="Books Issued"
          value={formatNumber(booksIssued)}
          icon={BookOpen}
          color="success"
        />
        <StatCard
          title="Overdue Books"
          value={formatNumber(overdueBooks)}
          icon={AlertCircle}
          color="error"
        />
      </div>
      
      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={24} className="text-indigo-400" />
            <h3 className="text-sm text-gray-400">Total Fines</h3>
          </div>
          <p className="text-3xl font-bold text-white">{formatCurrency(totalFines)}</p>
          <p className="text-sm text-gray-500 mt-1">All time</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={24} className="text-green-400" />
            <h3 className="text-sm text-gray-400">Collected Fines</h3>
          </div>
          <p className="text-3xl font-bold text-green-400">{formatCurrency(paidFines)}</p>
          <p className="text-sm text-gray-500 mt-1">
            {((paidFines / totalFines) * 100).toFixed(1)}% collection rate
          </p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={24} className="text-red-400" />
            <h3 className="text-sm text-gray-400">Outstanding Fines</h3>
          </div>
          <p className="text-3xl font-bold text-red-400">{formatCurrency(totalFines - paidFines)}</p>
          <p className="text-sm text-gray-500 mt-1">Pending collection</p>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Database Status</span>
              <span className="text-green-400 font-medium">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Server Uptime</span>
              <span className="text-green-400 font-medium">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Last Backup</span>
              <span className="text-gray-300">2 hours ago</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300">5 new user registrations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-300">12 books issued today</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-300">3 fines collected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};