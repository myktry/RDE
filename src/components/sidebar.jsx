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
    <aside className="w-64 bg-red-900 text-white p-4 space-y-2 fixed h-full">
      <h1 className="text-base font-bold mb-4">📊 Statistics</h1>
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm ${
            location.pathname === item.path
              ? 'bg-white text-red-900 font-semibold'
              : 'hover:text-yellow-300 hover:bg-red-800'
          }`}
        >
          <span className="text-base">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
}