import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitPage from './pages/SubmitPage';
import Projects from './pages/Projects';
import ProposalDetail from './pages/ProposalDetail';
import ResourcesPage from './pages/Resources';
import AccountPage from './pages/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SubmitPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/tracker" element={<SubmitPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProposalDetail />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
