import { NavLink } from 'react-router-dom'

const navItemBase =
  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${navItemBase} ${isActive ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/10'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Sidebar() {
  return (
    <aside className="h-[calc(100vh-3.5rem)] w-56 shrink-0 bg-red-900 text-white">
      <div className="px-3 py-4">
        <nav className="space-y-1">
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/endorsement">Endorsement</NavItem>
          <NavItem to="/account">Account</NavItem>
        </nav>
      </div>
    </aside>
  )
}


