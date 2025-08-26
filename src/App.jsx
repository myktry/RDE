import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import Endorsement from './pages/Endorsement'
import Account from './pages/Account'
import NotificationsPage from './pages/NotificationsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/endorsement" element={<Endorsement />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
