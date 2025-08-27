import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TrackerPage from './pages/TrackerPage';
import StatisticsPage from './pages/StatisticsPage';
import EndorsementPage from './pages/EndorsementPage';
import ProgressReportPage from './pages/ProgressReportPage';
import ResourcesPage from './pages/ResourcesPage';
import NotificationsPage from './pages/NotificationsPage';
import MessagesPage from './pages/MessagesPage';
import AccountPage from './pages/AccountPage';

function App() {
  const [activePage, setActivePage] = useState('tracker');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'tracker':
        return <TrackerPage onPageChange={setActivePage} />;
      case 'statistics':
        return <StatisticsPage />;
      case 'endorsement':
        return <EndorsementPage />;
      case 'progress-report':
        return <ProgressReportPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'messages':
        return <MessagesPage />;
      case 'account':
        return <AccountPage />;
      default:
        return <TrackerPage onPageChange={setActivePage} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 relative">
      <Header onPageChange={setActivePage} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <Sidebar 
            activePage={activePage} 
            onPageChange={(page) => {
              setActivePage(page);
              setSidebarOpen(false); // Close sidebar on mobile when page changes
            }} 
          />
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 overflow-auto">
            <div className="min-h-full flex flex-col">
              <div className="flex-1">
                {renderPage()}
              </div>
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
