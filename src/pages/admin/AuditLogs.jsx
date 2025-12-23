import { Table } from '../../components/shared/Table';
import { Badge } from '../../components/shared/Badge';
import { History } from 'lucide-react';
import { mockAuditLogs } from '../../data/mockData';
import { formatDateTime } from '../../utils/formatters';

export const AuditLogs = () => {
  const columns = [
    { 
      key: 'timestamp', 
      label: 'Timestamp', 
      sortable: true,
      render: (value) => formatDateTime(value)
    },
    { 
      key: 'action', 
      label: 'Action',
      render: (value) => (
        <Badge variant="primary" size="sm">
          {value.replace(/_/g, ' ')}
        </Badge>
      )
    },
    { key: 'performedBy', label: 'Performed By', sortable: true },
    { key: 'performedByRole', label: 'Role', sortable: true },
    { key: 'description', label: 'Description' }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Audit Logs</h1>
        <p className="text-gray-400">Track all system activities and changes</p>
      </div>
      
      {/* Timeline View */}
      <div className="card">
        <div className="flex items-center gap-2 mb-6">
          <History size={24} className="text-indigo-400" />
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
        </div>
        
        <div className="space-y-4">
          {mockAuditLogs.slice(0, 5).map((log, index) => (
            <div key={log.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                {index < 4 && <div className="w-0.5 h-full bg-gray-700 mt-2"></div>}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium text-white">{log.description}</h3>
                  <span className="text-xs text-gray-500">{formatDateTime(log.timestamp)}</span>
                </div>
                <p className="text-sm text-gray-400">
                  by {log.performedBy} ({log.performedByRole})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Full Logs Table */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">All Logs</h2>
        <Table columns={columns} data={mockAuditLogs} />
      </div>
    </div>
  );
};