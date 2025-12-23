import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { mockAnalytics } from '../../data/mockData';
import { Download } from 'lucide-react';
import { Button } from '../../components/shared/Button';

export const Analytics = () => {
  const { categoryDistribution, monthlyIssues, userActivity } = mockAnalytics;
  
  const COLORS = ['#6366f1', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400">Insights and trends from library data</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" icon={Download}>
            Export CSV
          </Button>
          <Button variant="secondary" icon={Download}>
            Export Excel
          </Button>
        </div>
      </div>
      
      {/* Monthly Issues Trend */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Monthly Book Issues</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyIssues}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f3f4f6'
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: '#6366f1', r: 4 }}
              activeDot={{ r: 6 }}
              name="Books Issued"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Category Distribution and User Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Books by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {categoryDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* User Activity */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Users by Role</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="role" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
              />
              <Legend />
              <Bar dataKey="count" fill="#8b5cf6" name="User Count" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Most Popular Category</h3>
          <p className="text-2xl font-bold text-indigo-400">
            {categoryDistribution.reduce((max, cat) => cat.count > max.count ? cat : max).category}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {categoryDistribution.reduce((max, cat) => cat.count > max.count ? cat : max).count} books
          </p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Peak Issue Month</h3>
          <p className="text-2xl font-bold text-green-400">
            {monthlyIssues.reduce((max, month) => month.count > max.count ? month : max).month}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {monthlyIssues.reduce((max, month) => month.count > max.count ? month : max).count} issues
          </p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Average Issues/Month</h3>
          <p className="text-2xl font-bold text-blue-400">
            {Math.round(monthlyIssues.reduce((sum, m) => sum + m.count, 0) / monthlyIssues.length)}
          </p>
          <p className="text-sm text-gray-500 mt-1">Last 6 months</p>
        </div>
      </div>
    </div>
  );
};