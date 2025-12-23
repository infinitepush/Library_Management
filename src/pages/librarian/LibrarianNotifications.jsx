import { Bell, AlertTriangle, Info } from 'lucide-react';
import { mockBooks, mockIssuedBooks } from '../../data/mockData';

export const LibrarianNotifications = () => {
  const lowStockBooks = mockBooks.filter(b => b.availableCopies <= 2);
  const overdueBooks = mockIssuedBooks.filter(b => b.status === 'overdue');
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
        <p className="text-gray-400">Important alerts and updates</p>
      </div>
      
      {/* Low Stock Alerts */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={24} className="text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Low Stock Alerts</h2>
        </div>
        <div className="space-y-3">
          {lowStockBooks.length === 0 ? (
            <div className="card text-center py-8">
              <p className="text-gray-400">No low stock items</p>
            </div>
          ) : (
            lowStockBooks.map((book) => (
              <div key={book.id} className="card border-l-4 border-yellow-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{book.title}</h3>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-yellow-400">
                      {book.availableCopies} / {book.totalCopies}
                    </p>
                    <p className="text-xs text-gray-500">copies available</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Overdue Books */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={24} className="text-red-400" />
          <h2 className="text-xl font-semibold text-white">Overdue Books</h2>
        </div>
        <div className="space-y-3">
          {overdueBooks.length === 0 ? (
            <div className="card text-center py-8">
              <p className="text-gray-400">No overdue books</p>
            </div>
          ) : (
            overdueBooks.map((book) => (
              <div key={book.id} className="card border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{book.bookTitle}</h3>
                    <p className="text-sm text-gray-400">Issued to: {book.userName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-red-400 font-medium">Overdue</p>
                    <p className="text-xs text-gray-500">Due: {book.dueDate}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* System Info */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Info size={24} className="text-blue-400" />
          <h2 className="text-xl font-semibold text-white">System Information</h2>
        </div>
        <div className="card border-l-4 border-blue-500">
          <h3 className="font-semibold text-white mb-2">System Update</h3>
          <p className="text-sm text-gray-400">
            The library management system will undergo maintenance on Sunday, 2:00 AM - 4:00 AM EST.
          </p>
        </div>
      </div>
    </div>
  );
};