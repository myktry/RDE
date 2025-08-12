import { Search, FileText, FolderOpen, User } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/tracker' || path === '/') {
      return location.pathname === '/tracker' || location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-red-800 text-white fixed h-full top-0 left-0 z-40">
      <nav className="pt-20 pb-6 h-full flex flex-col">
        <ul className="space-y-1 px-4 flex-1">
          <li>
            <Link 
              to="/tracker" 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/tracker') 
                  ? 'bg-white text-gray-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Search size={20} />
              <span className="text-sm">Submit</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/projects') 
                  ? 'bg-white text-gray-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <FileText size={20} />
              <span className="text-sm">Projects</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/resources" 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/resources') 
                  ? 'bg-white text-gray-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <FolderOpen size={20} />
              <span className="text-sm">Resources</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/account" 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/account') 
                  ? 'bg-white text-gray-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <User size={20} />
              <span className="text-sm">Account</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
