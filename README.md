# Admin Panel - Research Management System

A comprehensive admin panel for overseeing all users and system operations across the Research Management System.

## Features

### 🎯 User Management

- **Complete CRUD Operations**: Create, read, update, and delete users
- **Role-based Access Control**: Manage different user roles (Admin, Committee Member, Proponent, RDD Member, RDE Member, Reviewer)
- **User Status Management**: Track active, inactive, and pending users
- **Advanced Filtering**: Search and filter users by role, status, department, and more
- **Bulk Operations**: Select and manage multiple users simultaneously

### 📊 Dashboard & Analytics

- **Real-time Statistics**: Overview of user counts, activity levels, and system health
- **Role Distribution Charts**: Visual representation of user roles across the system
- **Recent Activity Feed**: Track user actions and system events
- **Quick Actions**: Fast access to common administrative tasks

### ⚙️ System Settings

- **General Configuration**: System name, version, and basic settings
- **Security Settings**: Session timeout, file upload limits, log retention
- **Notification Management**: Email notification preferences and frequency
- **Backup Configuration**: Automated backup settings and manual backup options
- **System Status Monitoring**: Real-time status of database, API, and services

### 📈 Reports & Analytics

- **User Summary Reports**: Comprehensive user statistics and demographics
- **Activity Reports**: User engagement and system usage analytics
- **Role Distribution Reports**: Detailed breakdown of user roles and permissions
- **System Usage Reports**: Performance metrics and resource utilization
- **Export Functionality**: Download reports in various formats

### 👤 Profile Management

- **Admin Profile**: Personal account settings and preferences
- **Security Settings**: Password management and two-factor authentication
- **Account Information**: Login history, account status, and activity logs

## Technology Stack

- **Frontend**: React 19.1.0 with Vite
- **Styling**: Tailwind CSS with custom admin theme
- **State Management**: React Context API with useReducer
- **Routing**: React Router DOM v6
- **Icons**: React Icons (Feather Icons)
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the Admin directory:

   ```bash
   cd Admin
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
Admin/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with sidebar navigation
│   │   ├── UserForm.jsx        # User creation/editing form
│   │   └── UserDetails.jsx     # User information display
│   ├── context/
│   │   └── AdminContext.jsx    # Global state management
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard with statistics
│   │   ├── UserManagement.jsx  # User CRUD operations
│   │   ├── SystemSettings.jsx  # System configuration
│   │   ├── Reports.jsx         # Report generation and analytics
│   │   └── Profile.jsx         # Admin profile management
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── public/
│   └── vite.svg               # Vite logo
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Key Components

### AdminContext

Central state management for the admin panel, handling:

- User data and CRUD operations
- Filtering and pagination
- Loading states and error handling
- Mock data generation for development

### User Management

Comprehensive user management system with:

- Data table with sorting and filtering
- Modal forms for user creation/editing
- User detail views with complete information
- Bulk selection and operations

### Dashboard

Real-time overview featuring:

- Statistical cards with key metrics
- Role distribution charts
- Recent activity timeline
- Quick action buttons

## User Roles

The admin panel manages the following user roles:

1. **Admin**: Full system access with ability to manage all users and settings
2. **Committee Member**: Can review and evaluate research proposals and progress reports
3. **Proponent**: Can submit research proposals and track their status
4. **RDD Member**: Research and Development Division member with proposal review capabilities
5. **RDE Member**: Research Development and Extension member with specialized review access
6. **Reviewer**: Can review and provide feedback on research proposals

## Customization

### Styling

The admin panel uses a custom Tailwind CSS theme with admin-specific color schemes. You can customize the appearance by modifying:

- `tailwind.config.js` for color schemes and design tokens
- `src/index.css` for custom component styles
- Individual component files for specific styling needs

### Adding New Features

1. Create new components in the `src/components/` directory
2. Add new pages in the `src/pages/` directory
3. Update the routing in `src/App.jsx`
4. Add navigation items in `src/components/Layout.jsx`

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Code Style

The project uses ESLint for code quality and consistency. Make sure to run `npm run lint` before committing changes.

## Integration

This admin panel is designed to integrate with the existing Research Management System projects:

- **CM**: Committee Member interface
- **Proponent**: Proposal submission interface
- **RDD**: Research and Development Division
- **RDEPage**: Research Development and Extension
- **USUURU**: University System

The admin panel provides centralized oversight and management capabilities for all these systems.

## Security Considerations

- All user operations require proper authentication
- Role-based access control is enforced throughout the interface
- Sensitive operations (like user deletion) require confirmation
- Password changes require current password verification
- Session management with configurable timeout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is part of the Research Management System and follows the same licensing terms.
"# OJT-shi" 
