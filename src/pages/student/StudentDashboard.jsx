import { useState } from 'react';
import { StatCard } from '../../components/shared/Card';
import { Table } from '../../components/shared/Table';
import { StatusBadge } from '../../components/shared/Badge';
import { Modal } from '../../components/shared/Modal';
import { Button } from '../../components/shared/Button';
import { BookOpen, AlertCircle, Clock, DollarSign } from 'lucide-react';
import { mockIssuedBooks, mockFines } from '../../data/mockData';
import { useUser } from '../../context/UserContext';
import { formatDate, formatCurrency } from '../../utils/formatters';

export const StudentDashboard = () => {
  const { currentUser } = useUser();
  const [selectedBook, setSelectedBook] = useState(null);
  
  // Filter data for current user
  const userIssuedBooks = mockIssuedBooks.filter(b => b.userId === currentUser?.id);
  const userFines = mockFines.filter(f => f.userId === currentUser?.id);
  
  const totalFines = userFines.reduce((sum, fine) => sum + (fine.amount - (fine.paidAmount || 0)), 0);
  const overdueBooks = userIssuedBooks.filter(b => b.status === 'overdue').length;
  
  const issuedBooksColumns = [
    { key: 'bookTitle', label: 'Book Title', sortable: true },
    { 
      key: 'issueDate', 
      label: 'Issue Date', 
      sortable: true,
      render: (value) => formatDate(value)
    },
    { 
      key: 'dueDate', 
      label: 'Due Date', 
      sortable: true,
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
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {currentUser?.name}!
        </h1>
        <p className="text-gray-400">
          Here's an overview of your library activity
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Books Issued"
          value={userIssuedBooks.length}
          icon={BookOpen}
          color="primary"
        />
        <StatCard
          title="Overdue Books"
          value={overdueBooks}
          icon={AlertCircle}
          color="error"
        />
        <StatCard
          title="Due This Week"
          value={userIssuedBooks.filter(b => {
            const dueDate = new Date(b.dueDate);
            const weekFromNow = new Date();
            weekFromNow.setDate(weekFromNow.getDate() + 7);
            return dueDate <= weekFromNow && b.status === 'active';
          }).length}
          icon={Clock}
          color="warning"
        />
        <StatCard
          title="Outstanding Fines"
          value={formatCurrency(totalFines)}
          icon={DollarSign}
          color="error"
        />
      </div>
      
      {/* Currently Issued Books */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Currently Issued Books</h2>
        {userIssuedBooks.length === 0 ? (
          <div className="card text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">You don't have any books issued currently</p>
            <Button className="mt-4">Browse Books</Button>
          </div>
        ) : (
          <Table
            columns={issuedBooksColumns}
            data={userIssuedBooks}
            onRowClick={(book) => setSelectedBook(book)}
          />
        )}
      </div>
      
      {/* Outstanding Fines */}
      {userFines.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Outstanding Fines</h2>
          <div className="space-y-3">
            {userFines.map((fine) => (
              <div key={fine.id} className="card flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">{fine.bookTitle}</h3>
                  <p className="text-sm text-gray-400">{fine.reason}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-400">
                    {formatCurrency(fine.amount - (fine.paidAmount || 0))}
                  </p>
                  <StatusBadge status={fine.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Book Details Modal */}
      <Modal
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        title="Book Details"
      >
        {selectedBook && (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Book Title</label>
              <p className="text-white font-medium">{selectedBook.bookTitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400">Issue Date</label>
                <p className="text-white">{formatDate(selectedBook.issueDate)}</p>
              </div>
              <div>
                <label className="text-sm text-gray-400">Due Date</label>
                <p className="text-white">{formatDate(selectedBook.dueDate)}</p>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400">Status</label>
              <div className="mt-1">
                <StatusBadge status={selectedBook.status} />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};