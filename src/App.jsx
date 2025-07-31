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
import AccountPage from './pages/AccountPage';

function App() {
  const [activePage, setActivePage] = useState('tracker');

  const renderPage = () => {
    switch (activePage) {
      case 'tracker':
        return <TrackerPage />;
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
      case 'account':
        return <AccountPage />;
      default:
        return <TrackerPage />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header onPageChange={setActivePage} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-auto">
            {renderPage()}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
