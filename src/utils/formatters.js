// Date formatters
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Number formatters
export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

export const formatNumber = (num) => {
  return num.toLocaleString('en-US');
};

// Status formatters
export const formatStatus = (status) => {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};

export const formatRole = (role) => {
  return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
};

// Book availability formatter
export const formatAvailability = (available, total) => {
  return `${available} of ${total} available`;
};