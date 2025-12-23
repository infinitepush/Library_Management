# Digital Library Management System

A modern, full-featured library management web application built with React, Vite, and Tailwind CSS v4.

## Features

### Three Role-Based Portals

#### 🎓 Student Portal
- Dashboard with issued books and fines overview
- Advanced book search with filters
- Request books and join waitlists
- Track requests and due dates
- Notification center for reminders

#### 📚 Librarian Portal
- Comprehensive dashboard with inventory stats
- Full inventory management (CRUD operations)
- Fine management and tracking
- Quick actions for book operations
- Low stock and overdue alerts

#### 👨‍💼 Admin Portal
- System-wide analytics dashboard
- User management with role assignment
- Detailed audit logs with timeline view
- Interactive charts and graphs (Recharts)
- System settings and configuration
- Data export capabilities

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Sidebar, Navbar, Layouts)
│   └── shared/          # Reusable components (Button, Card, Table, Modal, etc.)
├── constants/           # Enums and constants
├── context/            # React Context (User context)
├── data/               # Mock data
├── pages/              # Page components
│   ├── admin/          # Admin portal pages
│   ├── librarian/      # Librarian portal pages
│   └── student/        # Student portal pages
├── utils/              # Utility functions (formatters)
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind v4
```

## Usage

### Role Selection

On the landing page, select your role:
- **Student**: Access student features
- **Librarian**: Manage inventory and operations
- **Admin**: System administration and analytics

### Mock Data

The application uses comprehensive mock data for demonstration:
- 10 sample books across multiple categories
- 6 users (students, librarians, admins)
- Book requests and waitlists
- Issued books and fines
- Audit logs and analytics data

### Key Features

#### Search & Filter
- Search books by title, author, or ISBN
- Filter by category and availability status
- Real-time search results

#### Inventory Management
- Add, edit, and delete books
- Track available and issued copies
- Low stock alerts

#### Analytics Dashboard
- Monthly issue trends (Line chart)
- Category distribution (Pie chart)
- User activity by role (Bar chart)
- Export data to CSV/Excel

#### Audit Logs
- Complete activity timeline
- Track all system changes
- Filter by action type and user

## Design Features

- **Dark Theme**: Professional dark theme with purple/indigo accents
- **Responsive**: Fully responsive design for desktop and tablet
- **Modern UI**: Clean, professional SaaS-style interface
- **Smooth Animations**: Hover effects and transitions
- **Empty States**: Helpful empty state messages
- **Loading States**: Placeholder content for better UX

## Color Palette

- Primary: `#6366f1` (Indigo)
- Accent: `#8b5cf6` (Purple)
- Background: `#0f0f1e` (Dark Blue)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#ef4444` (Red)

## Typography

- Font Family: Inter (Google Fonts)
- Clean, modern, and highly readable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Built with ❤️ for modern library management