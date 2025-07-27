// File: src/components/Sidebar.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChartBar, FaFileAlt, FaUser } from 'react-icons/fa';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', label: 'Statistics', icon: <FaChartBar /> },
    { path: '/proposals', label: 'Proposals', icon: <FaFileAlt /> },
    { path: '/useraccount', label: 'Account', icon: <FaUser /> },
  ];

  return (
    <aside className="w-64 bg-red-900 text-white p-4 space-y-2 fixed left-0 top-[72px] h-[calc(100vh-72px)] shadow-lg">
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
            location.pathname === item.path
              ? 'bg-white text-red-900 shadow-md transform scale-105'
              : 'hover:bg-red-800 hover:text-yellow-300 text-white'
          }`}
        >
          <span className={`text-base ${location.pathname === item.path ? 'text-red-900' : 'text-white'}`}>
            {item.icon}
          </span>
          <span className={location.pathname === item.path ? 'text-red-900 font-semibold' : 'text-white'}>
            {item.label}
          </span>
        </button>
      ))}
    </aside>
  );
}