import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <Header />
      <Sidebar />
      <main className="ml-64 min-h-screen pt-20">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


