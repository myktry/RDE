import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New Proposal Submitted",
      message: "A new proposal has been submitted for review",
      time: "2 minutes ago",
      unread: true
    },
    {
      id: 2,
      title: "Proposal Approved",
      message: "Your proposal 'Renewable Energy Implementation' has been approved",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      title: "System Update",
      message: "System maintenance scheduled for tomorrow at 2 AM",
      time: "3 hours ago",
      unread: false
    },
    {
      id: 4,
      title: "Document Uploaded",
      message: "New supporting documents have been uploaded",
      time: "1 day ago",
      unread: false
    }
  ];

  const handleProfileClick = () => {
    navigate("/useraccount");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleClickOutside = (event) => {
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  const handleViewAllNotifications = () => {
    setShowNotifications(false);
    navigate("/notifications");
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="w-full bg-gradient-to-r from-red-900 to-orange-600 text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Left: University info with logo */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src="/USeP-logo.png"
            alt="USeP Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-green-500 rounded-full items-center justify-center text-white font-bold text-lg hidden">
          </div>
        </div>
        <div>
          <h1 className="text-base sm:text-lg font-bold leading-tight">
            UNIVERSITY OF SOUTHEASTERN PHILIPPINES
          </h1>
          <p className="text-xs text-gray-200">Office of the President</p>
        </div>
      </div>

      {/* Right: User info and icons */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          {/* Notification Bell */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={toggleNotifications}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors relative"
            >
              <FaBell className="text-lg" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
            
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                  <p className="text-sm text-gray-600">{unreadCount} unread</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        notification.unread ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${
                            notification.unread ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200">
                  <button 
                    onClick={handleViewAllNotifications}
                    className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
