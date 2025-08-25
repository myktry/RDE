// File: src/components/Sidebar.jsx
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaFileAlt, 
  FaUser, 
  FaHome, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes
} from 'react-icons/fa';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const menuItems = [
    { 
      path: '/', 
      label: 'Dashboard', 
      icon: <FaHome />,
      description: 'Overview and statistics'
    },
    { 
      path: '/proposals', 
      label: 'Proposals', 
      icon: <FaFileAlt />,
      description: 'Manage research proposals'
    }
  ];

  const bottomMenuItems = [
    { 
      path: '/useraccount', 
      label: 'Account', 
      icon: <FaUser />,
      description: 'Profile settings'
    }
  ];

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-red-900 text-white rounded-lg shadow-lg hover:bg-red-800 transition-colors"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full bg-gradient-to-b from-red-900 via-red-800 to-red-900 
        text-white shadow-2xl sidebar-transition z-30 sidebar-responsive 
        ${isCollapsed ? 'w-20' : 'w-72'} 
        ${isMobileMenuOpen ? 'translate-x-0 sidebar-slide' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header Section */}
        <div className="p-2">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/USeP-logo.png"
                    alt="USeP"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                </div>
              </div>
            )}
            <button
              onClick={toggleSidebar}
              className="hidden lg:block p-2 hover:bg-red-700 rounded-lg transition-colors"
            >
              {isCollapsed ? <FaBars /> : <FaTimes />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="overflow-y-auto sidebar-scrollbar">
          <div className="px-3 mb-2 space-y-1">
            {/* Main Menu Items */}
            <div className="space-y-1 mt-10">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-200 
                    text-sm font-medium group relative overflow-hidden menu-item-hover sidebar-focus
                    ${location.pathname === item.path
                      ? 'bg-gradient-to-r from-white to-gray-100 text-red-900 shadow-lg transform scale-105 active-glow'
                      : 'hover:bg-red-700 hover:text-yellow-300 text-white hover:shadow-md'
                    }
                  `}
                  title={isCollapsed ? item.label : ''}
                >
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-r-full" />
                  )}
                  
                  <span className={`
                    text-lg transition-colors duration-200 flex-shrink-0
                    ${location.pathname === item.path ? 'text-red-900' : 'text-red-200 group-hover:text-yellow-300'}
                  `}>
                    {item.icon}
                  </span>
                  
                  {!isCollapsed && (
                    <div className="flex-1 text-left">
                      <span className={`
                        block font-medium
                        ${location.pathname === item.path ? 'text-red-900' : 'text-white'}
                      `}>
                        {item.label}
                      </span>
                      <span className="text-xs text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.description}
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Divider */}
            {!isCollapsed && (
              <div className="my-2 border-t border-red-700" />
            )}

            {/* Bottom Menu Items */}
            <div className="space-y-1">
              {bottomMenuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-200 
                    text-sm font-medium group relative overflow-hidden menu-item-hover sidebar-focus
                    ${location.pathname === item.path
                      ? 'bg-gradient-to-r from-white to-gray-100 text-red-900 shadow-lg transform scale-105 active-glow'
                      : 'hover:bg-red-700 hover:text-yellow-300 text-white hover:shadow-md'
                    }
                  `}
                  title={isCollapsed ? item.label : ''}
                >
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-r-full" />
                  )}
                  
                  <span className={`
                    text-lg transition-colors duration-200 flex-shrink-0
                    ${location.pathname === item.path ? 'text-red-900' : 'text-red-200 group-hover:text-yellow-300'}
                  `}>
                    {item.icon}
                  </span>
                  
                  {!isCollapsed && (
                    <div className="flex-1 text-left">
                      <span className={`
                        block font-medium
                        ${location.pathname === item.path ? 'text-red-900' : 'text-white'}
                      `}>
                        {item.label}
                      </span>
                      <span className="text-xs text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.description}
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-red-700">
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-200 
              text-sm font-medium group hover:bg-red-700 hover:text-red-200 text-red-300
              hover:shadow-md menu-item-hover sidebar-focus
            `}
            title={isCollapsed ? 'Logout' : ''}
          >
            <span className="text-lg flex-shrink-0">
              <FaSignOutAlt />
            </span>
            {!isCollapsed && (
              <span className="font-medium">Logout</span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`} />
    </>
  );
}