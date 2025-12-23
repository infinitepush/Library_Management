import { StatCard } from '../../components/shared/Card';
import { Table } from '../../components/shared/Table';
import { StatusBadge } from '../../components/shared/Badge';
import { BookOpen, Users, AlertCircle, DollarSign } from 'lucide-react';
import { mockBooks, mockIssuedBooks, mockRequests, mockFines } from '../../data/mockData';
import { formatDate } from '../../utils/formatters';

export const LibrarianDashboard = () => {
  const totalBooks = mockBooks.reduce((sum, book) => sum + book.totalCopies, 0);
  const availableBooks = mockBooks.reduce((sum, book) => sum + book.availableCopies, 0);
  const issuedBooks = mockIssuedBooks.filter(b => b.status === 'active' || b.status === 'overdue').length;
  const overdueBooks = mockIssuedBooks.filter(b => b.status === 'overdue').length;
  const pendingRequests = mockRequests.filter(r => r.status === 'pending').length;
  const unpaidFines = mockFines.filter(f => f.status === 'unpaid').length;
  
  const recentIssuesColumns = [
    { key: 'bookTitle', label: 'Book Title', sortable: true },
    { key: 'userName', label: 'Student', sortable: true },
    { 
      key: 'issueDate', 
      label: 'Issue Date',
      render: (value) => formatDate(value)
    },
    { 
      key: 'dueDate', 
      label: 'Due Date',
      render: (value) => formatDate(value)
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => <StatusBadge status={value} />
    }
  ];
  
  const pendingRequestsColumns = [
    { key: 'bookTitle', label: 'Book Title', sortable: true },
    { key: 'userName', label: 'Student', sortable: true },
    { 
      key: 'requestDate', 
      label: 'Request Date',
      render: (value) => formatDate(value)
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => <StatusBadge status={value} />
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Librarian Dashboard</h1>
        <p className="text-gray-400">Manage library operations and track inventory</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Books"
          value={totalBooks}
          icon={BookOpen}
          color="primary"
          trend="up"
          trendValue="+12 this month"
        />
        <StatCard
          title="Books Issued"
          value={issuedBooks}
          icon={Users}
          color="info"
        />
        <StatCard
          title="Overdue Books"
          value={overdueBooks}
          icon={AlertCircle}
          color="error"
        />
        <StatCard
          title="Pending Requests"
          value={pendingRequests}
          icon={BookOpen}
          color="warning"
        />
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Available Books</h3>
          <p className="text-2xl font-bold text-green-400">{availableBooks}</p>
          <p className="text-xs text-gray-500 mt-1">Ready to issue</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Unpaid Fines</h3>
          <p className="text-2xl font-bold text-red-400">{unpaidFines}</p>
          <p className="text-xs text-gray-500 mt-1">Requires attention</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Low Stock Items</h3>
          <p className="text-2xl font-bold text-yellow-400">
            {mockBooks.filter(b => b.availableCopies <= 2).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Need restocking</p>
        </div>
      </div>
      
      {/* Recent Issues */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Recent Issues</h2>
        <Table
          columns={recentIssuesColumns}
          data={mockIssuedBooks.slice(0, 5)}
          showPagination={false}
        />
      </div>
      
      {/* Pending Requests */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Pending Requests</h2>
        <Table
          columns={pendingRequestsColumns}
          data={mockRequests.filter(r => r.status === 'pending')}
          showPagination={false}
        />
      </div>
    </div>
  );
};