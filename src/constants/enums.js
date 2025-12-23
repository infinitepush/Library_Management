export const UserRole = {
  STUDENT: 'student',
  LIBRARIAN: 'librarian',
  ADMIN: 'admin'
};

export const BookStatus = {
  AVAILABLE: 'available',
  ISSUED: 'issued',
  LOST: 'lost',
  RESERVED: 'reserved'
};

export const RequestStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  COMPLETED: 'completed'
};

export const FineStatus = {
  PAID: 'paid',
  UNPAID: 'unpaid',
  PARTIAL: 'partial'
};

export const NotificationType = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success'
};

export const AuditAction = {
  BOOK_ISSUED: 'book_issued',
  BOOK_RETURNED: 'book_returned',
  BOOK_ADDED: 'book_added',
  BOOK_REMOVED: 'book_removed',
  USER_CREATED: 'user_created',
  USER_UPDATED: 'user_updated',
  FINE_PAID: 'fine_paid',
  REQUEST_CREATED: 'request_created'
};