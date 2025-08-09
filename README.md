# Research and Development Division Dashboard

A modern web application for the University of Southeastern Philippines Research and Development Division. Built with React, JavaScript, and Tailwind CSS.

## Features

- **Dashboard Overview**: Track research proposals, completed projects, and compliance status
- **Research Management**: View and manage research projects with status tracking
- **Filtering System**: Filter research by year range and status
- **Responsive Design**: Modern, clean interface that works on all devices
- **Navigation**: Easy navigation between different sections

## Pages

- **Tracker**: Main dashboard with summary cards and research list
- **Statistics**: Research statistics and analytics (placeholder)
- **Review of Documents**: Document review system (placeholder)
- **Progress Reports**: Progress reporting functionality (placeholder)
- **Submit Report**: Report submission interface (placeholder)
- **Resources**: Resource management (placeholder)
- **Account**: User account management (placeholder)

## Technology Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.4
- **Language**: JavaScript

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Application header
│   ├── Sidebar.jsx     # Navigation sidebar
│   ├── Footer.jsx      # Application footer
│   ├── Layout.jsx      # Main layout component
│   ├── SummaryCard.jsx # Statistics cards
│   ├── FilterControls.jsx # Filter controls
│   └── ResearchTable.jsx # Research data table
├── pages/              # Page components
│   ├── Tracker.jsx     # Main dashboard page
│   ├── Statistics.jsx  # Statistics page
│   ├── ReviewOfDocuments.jsx # Document review page
│   ├── ProgressReports.jsx # Progress reports page
│   ├── SubmitReport.jsx # Report submission page
│   ├── Resources.jsx   # Resources page
│   └── Account.jsx     # Account management page
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## Development

The application uses a component-based architecture with:
- **Components**: Reusable UI elements in the `components/` folder
- **Pages**: Full page components in the `pages/` folder
- **Layout**: Main layout component that handles routing and structure

## Styling

The application uses Tailwind CSS for styling, providing:
- Responsive design
- Modern UI components
- Consistent color scheme (red theme)
- Clean, professional appearance

## Future Enhancements

- Add real data integration
- Implement user authentication
- Add more interactive features
- Enhance the placeholder pages with full functionality
- Add data visualization for statistics
- Implement form handling for report submission
