export const Badge = ({ children, variant = 'default', size = 'md' }) => {
  const variants = {
    default: 'bg-gray-700 text-gray-300',
    primary: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    success: 'bg-green-500/20 text-green-300 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    error: 'bg-red-500/20 text-red-300 border border-red-500/30',
    info: 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

export const StatusBadge = ({ status }) => {
  const statusConfig = {
    active: { variant: 'success', label: 'Active' },
    inactive: { variant: 'default', label: 'Inactive' },
    pending: { variant: 'warning', label: 'Pending' },
    approved: { variant: 'success', label: 'Approved' },
    rejected: { variant: 'error', label: 'Rejected' },
    completed: { variant: 'info', label: 'Completed' },
    overdue: { variant: 'error', label: 'Overdue' },
    available: { variant: 'success', label: 'Available' },
    issued: { variant: 'warning', label: 'Issued' },
    lost: { variant: 'error', label: 'Lost' },
    paid: { variant: 'success', label: 'Paid' },
    unpaid: { variant: 'error', label: 'Unpaid' },
    partial: { variant: 'warning', label: 'Partial' }
  };
  
  const config = statusConfig[status] || { variant: 'default', label: status };
  
  return <Badge variant={config.variant}>{config.label}</Badge>;
};