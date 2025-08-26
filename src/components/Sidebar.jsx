import { NavLink } from 'react-router-dom'

const navItemBase =
  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-105'

function NavItem({ to, icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${navItemBase} ${
          isActive 
            ? 'bg-white/20 text-white shadow-lg ring-1 ring-white/30' 
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  )
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-5 h-screen w-64 bg-gradient-to-b from-red-900 to-red-800 text-white shadow-xl border-r border-red-800/50 z-10">
      <div className="h-full overflow-y-auto p-6 pt-20">
        {/* Navigation */}
        <nav className="space-y-2">
          <NavItem 
            to="/projects" 
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
          >
            Projects
          </NavItem>
          
          <NavItem 
            to="/endorsement" 
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            Endorsement
          </NavItem>
          
          <NavItem 
            to="/account" 
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          >
            Account
          </NavItem>
        </nav>
      </div>
    </aside>
  )
}


