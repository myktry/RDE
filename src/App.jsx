import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import ReviewProposal from './pages/ReviewProposal';
import ProgressReport from './pages/ProgressReport';
import SubmitReport from './pages/SubmitReport';
import Resources from './pages/Resources';
import Account from './pages/Account';
import ProposalDetail from './pages/ProposalDetail';
import NotificationsPage from './pages/Notifications';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/review-proposal" element={<ReviewProposal />} />
          <Route path="/progress-report" element={<ProgressReport />} />
          <Route path="/submit-report" element={<SubmitReport />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/account" element={<Account />} />
          <Route path="/proposal/:id" element={<ProposalDetail />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
