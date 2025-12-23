import { BookStatus, RequestStatus, FineStatus, NotificationType, UserRole } from '../constants/enums';

// Mock Books Data
export const mockBooks = [
  {
    id: 'book-1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0-7432-7356-5',
    category: 'Fiction',
    publisher: 'Scribner',
    year: 1925,
    totalCopies: 5,
    availableCopies: 2,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=1',
    description: 'A classic American novel set in the Jazz Age.'
  },
  {
    id: 'book-2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '978-0-06-112008-4',
    category: 'Fiction',
    publisher: 'J.B. Lippincott & Co.',
    year: 1960,
    totalCopies: 4,
    availableCopies: 0,
    status: BookStatus.ISSUED,
    coverImage: 'https://picsum.photos/200/300?random=2',
    description: 'A gripping tale of racial injustice and childhood innocence.'
  },
  {
    id: 'book-3',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '978-0-13-235088-4',
    category: 'Technology',
    publisher: 'Prentice Hall',
    year: 2008,
    totalCopies: 8,
    availableCopies: 5,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=3',
    description: 'A handbook of agile software craftsmanship.'
  },
  {
    id: 'book-4',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    isbn: '978-0-13-595705-9',
    category: 'Technology',
    publisher: 'Addison-Wesley',
    year: 2019,
    totalCopies: 6,
    availableCopies: 3,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=4',
    description: 'Your journey to mastery in software development.'
  },
  {
    id: 'book-5',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    isbn: '978-0-06-231609-7',
    category: 'History',
    publisher: 'Harper',
    year: 2015,
    totalCopies: 7,
    availableCopies: 4,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=5',
    description: 'A brief history of humankind.'
  },
  {
    id: 'book-6',
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0-452-28423-4',
    category: 'Fiction',
    publisher: 'Signet Classic',
    year: 1949,
    totalCopies: 6,
    availableCopies: 1,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=6',
    description: 'A dystopian social science fiction novel.'
  },
  {
    id: 'book-7',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '978-0-262-03384-8',
    category: 'Technology',
    publisher: 'MIT Press',
    year: 2009,
    totalCopies: 10,
    availableCopies: 7,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=7',
    description: 'Comprehensive guide to algorithms and data structures.'
  },
  {
    id: 'book-8',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    isbn: '978-0-06-112241-5',
    category: 'Fiction',
    publisher: 'HarperOne',
    year: 1988,
    totalCopies: 5,
    availableCopies: 2,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=8',
    description: 'A philosophical novel about following your dreams.'
  },
  {
    id: 'book-9',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    isbn: '978-0-374-53355-7',
    category: 'Psychology',
    publisher: 'Farrar, Straus and Giroux',
    year: 2011,
    totalCopies: 4,
    availableCopies: 2,
    status: BookStatus.AVAILABLE,
    coverImage: 'https://picsum.photos/200/300?random=9',
    description: 'Explores the two systems that drive the way we think.'
  },
  {
    id: 'book-10',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0-465-05065-9',
    category: 'Design',
    publisher: 'Basic Books',
    year: 2013,
    totalCopies: 5,
    availableCopies: 0,
    status: BookStatus.ISSUED,
    coverImage: 'https://picsum.photos/200/300?random=10',
    description: 'Essential reading for understanding user-centered design.'
  }
];

// Mock Users Data
export const mockUsers = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@university.edu',
    role: UserRole.STUDENT,
    status: 'active',
    joinedDate: '2023-09-01',
    phone: '+1-555-0101'
  },
  {
    id: 'user-2',
    name: 'Jane Smith',
    email: 'jane.smith@university.edu',
    role: UserRole.STUDENT,
    status: 'active',
    joinedDate: '2023-09-01',
    phone: '+1-555-0102'
  },
  {
    id: 'user-3',
    name: 'Robert Johnson',
    email: 'robert.johnson@library.edu',
    role: UserRole.LIBRARIAN,
    status: 'active',
    joinedDate: '2020-01-15',
    phone: '+1-555-0201'
  },
  {
    id: 'user-4',
    name: 'Emily Davis',
    email: 'emily.davis@admin.edu',
    role: UserRole.ADMIN,
    status: 'active',
    joinedDate: '2019-06-10',
    phone: '+1-555-0301'
  },
  {
    id: 'user-5',
    name: 'Michael Brown',
    email: 'michael.brown@university.edu',
    role: UserRole.STUDENT,
    status: 'active',
    joinedDate: '2024-01-10',
    phone: '+1-555-0103'
  },
  {
    id: 'user-6',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@library.edu',
    role: UserRole.LIBRARIAN,
    status: 'active',
    joinedDate: '2021-03-20',
    phone: '+1-555-0202'
  }
];

// Mock Book Requests
export const mockRequests = [
  {
    id: 'req-1',
    bookId: 'book-2',
    bookTitle: 'To Kill a Mockingbird',
    userId: 'user-1',
    userName: 'John Doe',
    requestDate: '2025-01-15',
    status: RequestStatus.PENDING,
    notes: 'Need for literature class'
  },
  {
    id: 'req-2',
    bookId: 'book-10',
    bookTitle: 'The Design of Everyday Things',
    userId: 'user-1',
    userName: 'John Doe',
    requestDate: '2025-01-18',
    status: RequestStatus.APPROVED,
    notes: 'Required for UX design project'
  },
  {
    id: 'req-3',
    bookId: 'book-3',
    bookTitle: 'Clean Code',
    userId: 'user-5',
    userName: 'Michael Brown',
    requestDate: '2025-01-20',
    status: RequestStatus.COMPLETED,
    notes: null
  }
];

// Mock Issued Books
export const mockIssuedBooks = [
  {
    id: 'issued-1',
    bookId: 'book-1',
    bookTitle: 'The Great Gatsby',
    userId: 'user-1',
    userName: 'John Doe',
    issueDate: '2025-01-05',
    dueDate: '2025-02-05',
    returnDate: null,
    status: 'active'
  },
  {
    id: 'issued-2',
    bookId: 'book-4',
    bookTitle: 'The Pragmatic Programmer',
    userId: 'user-1',
    userName: 'John Doe',
    issueDate: '2024-12-20',
    dueDate: '2025-01-20',
    returnDate: null,
    status: 'overdue'
  },
  {
    id: 'issued-3',
    bookId: 'book-2',
    bookTitle: 'To Kill a Mockingbird',
    userId: 'user-2',
    userName: 'Jane Smith',
    issueDate: '2025-01-10',
    dueDate: '2025-02-10',
    returnDate: null,
    status: 'active'
  },
  {
    id: 'issued-4',
    bookId: 'book-10',
    bookTitle: 'The Design of Everyday Things',
    userId: 'user-5',
    userName: 'Michael Brown',
    issueDate: '2025-01-12',
    dueDate: '2025-02-12',
    returnDate: null,
    status: 'active'
  }
];

// Mock Fines
export const mockFines = [
  {
    id: 'fine-1',
    userId: 'user-1',
    userName: 'John Doe',
    bookId: 'book-4',
    bookTitle: 'The Pragmatic Programmer',
    amount: 5.50,
    reason: 'Late return - 2 days overdue',
    status: FineStatus.UNPAID,
    dueDate: '2025-01-25',
    paidDate: null,
    paidAmount: 0
  },
  {
    id: 'fine-2',
    userId: 'user-2',
    userName: 'Jane Smith',
    bookId: 'book-6',
    bookTitle: '1984',
    amount: 10.00,
    reason: 'Late return - 5 days overdue',
    status: FineStatus.PAID,
    dueDate: '2025-01-10',
    paidDate: '2025-01-12',
    paidAmount: 10.00
  },
  {
    id: 'fine-3',
    userId: 'user-5',
    userName: 'Michael Brown',
    bookId: 'book-8',
    bookTitle: 'The Alchemist',
    amount: 15.00,
    reason: 'Damaged book cover',
    status: FineStatus.PARTIAL,
    dueDate: '2025-01-30',
    paidDate: '2025-01-20',
    paidAmount: 7.50
  }
];

// Mock Notifications
export const mockNotifications = [
  {
    id: 'notif-1',
    userId: 'user-1',
    type: NotificationType.WARNING,
    title: 'Book Due Soon',
    message: 'The Pragmatic Programmer is due in 2 days',
    date: '2025-01-20',
    read: false
  },
  {
    id: 'notif-2',
    userId: 'user-1',
    type: NotificationType.SUCCESS,
    title: 'Request Approved',
    message: 'Your request for The Design of Everyday Things has been approved',
    date: '2025-01-19',
    read: false
  },
  {
    id: 'notif-3',
    userId: 'user-1',
    type: NotificationType.ERROR,
    title: 'Overdue Fine',
    message: 'You have an outstanding fine of $5.50',
    date: '2025-01-21',
    read: true
  },
  {
    id: 'notif-4',
    userId: 'user-1',
    type: NotificationType.INFO,
    title: 'New Books Available',
    message: '5 new books have been added to the Technology section',
    date: '2025-01-18',
    read: true
  }
];

// Mock Audit Logs
export const mockAuditLogs = [
  {
    id: 'audit-1',
    action: 'BOOK_ISSUED',
    performedBy: 'Robert Johnson',
    performedByRole: UserRole.LIBRARIAN,
    targetEntity: 'Book',
    targetId: 'book-1',
    description: 'Issued "The Great Gatsby" to John Doe',
    timestamp: '2025-01-05T10:30:00Z',
    metadata: { bookTitle: 'The Great Gatsby', userName: 'John Doe' }
  },
  {
    id: 'audit-2',
    action: 'USER_CREATED',
    performedBy: 'Emily Davis',
    performedByRole: UserRole.ADMIN,
    targetEntity: 'User',
    targetId: 'user-5',
    description: 'Created new student account for Michael Brown',
    timestamp: '2024-01-10T14:20:00Z',
    metadata: { userName: 'Michael Brown', role: 'student' }
  },
  {
    id: 'audit-3',
    action: 'BOOK_RETURNED',
    performedBy: 'Sarah Wilson',
    performedByRole: UserRole.LIBRARIAN,
    targetEntity: 'Book',
    targetId: 'book-6',
    description: 'Returned "1984" from Jane Smith',
    timestamp: '2025-01-08T16:45:00Z',
    metadata: { bookTitle: '1984', userName: 'Jane Smith' }
  },
  {
    id: 'audit-4',
    action: 'FINE_PAID',
    performedBy: 'Jane Smith',
    performedByRole: UserRole.STUDENT,
    targetEntity: 'Fine',
    targetId: 'fine-2',
    description: 'Paid fine of $10.00 for late return',
    timestamp: '2025-01-12T11:15:00Z',
    metadata: { amount: 10.00 }
  },
  {
    id: 'audit-5',
    action: 'BOOK_ADDED',
    performedBy: 'Robert Johnson',
    performedByRole: UserRole.LIBRARIAN,
    targetEntity: 'Book',
    targetId: 'book-7',
    description: 'Added new book "Introduction to Algorithms"',
    timestamp: '2025-01-15T09:00:00Z',
    metadata: { bookTitle: 'Introduction to Algorithms', copies: 10 }
  },
  {
    id: 'audit-6',
    action: 'REQUEST_CREATED',
    performedBy: 'John Doe',
    performedByRole: UserRole.STUDENT,
    targetEntity: 'Request',
    targetId: 'req-1',
    description: 'Requested "To Kill a Mockingbird"',
    timestamp: '2025-01-15T13:30:00Z',
    metadata: { bookTitle: 'To Kill a Mockingbird' }
  }
];

// Mock Waitlist
export const mockWaitlist = [
  {
    id: 'wait-1',
    bookId: 'book-2',
    bookTitle: 'To Kill a Mockingbird',
    userId: 'user-5',
    userName: 'Michael Brown',
    position: 1,
    addedDate: '2025-01-16',
    status: 'waiting'
  },
  {
    id: 'wait-2',
    bookId: 'book-10',
    bookTitle: 'The Design of Everyday Things',
    userId: 'user-2',
    userName: 'Jane Smith',
    position: 1,
    addedDate: '2025-01-17',
    status: 'waiting'
  }
];

// Mock Analytics Data
export const mockAnalytics = {
  totalBooks: 66,
  totalUsers: 245,
  booksIssued: 42,
  overdueBooks: 8,
  totalFines: 125.50,
  paidFines: 85.00,
  categoryDistribution: [
    { category: 'Fiction', count: 25 },
    { category: 'Technology', count: 18 },
    { category: 'History', count: 10 },
    { category: 'Science', count: 8 },
    { category: 'Psychology', count: 5 }
  ],
  monthlyIssues: [
    { month: 'Aug', count: 35 },
    { month: 'Sep', count: 42 },
    { month: 'Oct', count: 38 },
    { month: 'Nov', count: 45 },
    { month: 'Dec', count: 40 },
    { month: 'Jan', count: 48 }
  ],
  userActivity: [
    { role: 'Students', count: 200 },
    { role: 'Librarians', count: 15 },
    { role: 'Admins', count: 5 }
  ]
};