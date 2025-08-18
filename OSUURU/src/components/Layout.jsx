import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <Sidebar />
        <main className="min-h-[calc(100vh-7rem)] flex-1 rounded-lg bg-white p-6 shadow">
          <Outlet />
        </main>
      </div>
    </div>
  )
}


