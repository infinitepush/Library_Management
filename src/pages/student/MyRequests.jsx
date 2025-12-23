import { Table } from '../../components/shared/Table';
import { StatusBadge } from '../../components/shared/Badge';
import { mockRequests, mockWaitlist } from '../../data/mockData';
import { useUser } from '../../context/UserContext';
import { formatDate } from '../../utils/formatters';
import { FileText, Clock } from 'lucide-react';

export const MyRequests = () => {
  const { currentUser } = useUser();
  
  const userRequests = mockRequests.filter(r => r.userId === currentUser?.id);
  const userWaitlist = mockWaitlist.filter(w => w.userId === currentUser?.id);
  
  const requestColumns = [
    { key: 'bookTitle', label: 'Book Title', sortable: true },
    { 
      key: 'requestDate', 
      label: 'Request Date', 
      sortable: true,
      render: (value) => formatDate(value)
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => <StatusBadge status={value} />
    },
    { key: 'notes', label: 'Notes' }
  ];
  
  const waitlistColumns = [
    { key: 'bookTitle', label: 'Book Title', sortable: true },
    { key: 'position', label: 'Position', sortable: true },
    { 
      key: 'addedDate', 
      label: 'Added Date', 
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
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Requests</h1>
        <p className="text-gray-400">Track your book requests and waitlist status</p>
      </div>
      
      {/* Book Requests */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText size={24} className="text-indigo-400" />
          <h2 className="text-xl font-semibold text-white">Book Requests</h2>
        </div>
        {userRequests.length === 0 ? (
          <div className="card text-center py-12">
            <FileText size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">You haven't made any book requests yet</p>
          </div>
        ) : (
          <Table columns={requestColumns} data={userRequests} />
        )}
      </div>
      
      {/* Waitlist */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock size={24} className="text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Waitlist</h2>
        </div>
        {userWaitlist.length === 0 ? (
          <div className="card text-center py-12">
            <Clock size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">You're not on any waitlists</p>
          </div>
        ) : (
          <Table columns={waitlistColumns} data={userWaitlist} />
        )}
      </div>
    </div>
  );
};