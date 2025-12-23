import { Table } from '../../components/shared/Table';
import { StatusBadge } from '../../components/shared/Badge';
import { Button } from '../../components/shared/Button';
import { DollarSign, CheckCircle } from 'lucide-react';
import { mockFines } from '../../data/mockData';
import { formatDate, formatCurrency } from '../../utils/formatters';

export const FineManagement = () => {
  const totalFines = mockFines.reduce((sum, fine) => sum + fine.amount, 0);
  const paidFines = mockFines.filter(f => f.status === 'paid').reduce((sum, fine) => sum + fine.paidAmount, 0);
  const unpaidFines = mockFines.filter(f => f.status === 'unpaid').reduce((sum, fine) => sum + fine.amount, 0);
  
  const columns = [
    { key: 'userName', label: 'Student', sortable: true },
    { key: 'bookTitle', label: 'Book', sortable: true },
    { 
      key: 'amount', 
      label: 'Amount',
      sortable: true,
      render: (value) => formatCurrency(value)
    },
    { key: 'reason', label: 'Reason' },
    { 
      key: 'dueDate', 
      label: 'Due Date',
      render: (value) => formatDate(value)
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => <StatusBadge status={value} />
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        row.status === 'unpaid' && (
          <Button
            size="sm"
            variant="success"
            icon={CheckCircle}
            onClick={() => alert(`Mark fine as paid (mock): ${row.id}`)}
          >
            Mark Paid
          </Button>
        )
      )
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Fine Management</h1>
        <p className="text-gray-400">Track and manage library fines</p>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={24} className="text-indigo-400" />
            <h3 className="text-sm text-gray-400">Total Fines</h3>
          </div>
          <p className="text-3xl font-bold text-white">{formatCurrency(totalFines)}</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle size={24} className="text-green-400" />
            <h3 className="text-sm text-gray-400">Paid Fines</h3>
          </div>
          <p className="text-3xl font-bold text-green-400">{formatCurrency(paidFines)}</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={24} className="text-red-400" />
            <h3 className="text-sm text-gray-400">Unpaid Fines</h3>
          </div>
          <p className="text-3xl font-bold text-red-400">{formatCurrency(unpaidFines)}</p>
        </div>
      </div>
      
      {/* Fines Table */}
      <Table columns={columns} data={mockFines} />
    </div>
  );
};