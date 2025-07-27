import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/useraccount";
import Proposals from "./pages/proposals";
import ProposalViewer from "./pages/ProposalViewer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/useraccount" element={<Account />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/proposal/:id" element={<ProposalViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
