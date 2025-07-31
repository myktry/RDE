import React, { useState } from 'react';

const Header = ({ onPageChange }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Research Proposal Submitted',
      message: 'A new research proposal has been submitted for review.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      title: 'Progress Report Due',
      message: 'Monthly progress report is due in 3 days.',
      time: '1 day ago',
      unread: true
    },
    {
      id: 3,
      title: 'Endorsement Approved',
      message: 'Your research endorsement has been approved.',
      time: '2 days ago',
      unread: false
    },
    {
      id: 4,
      title: 'Meeting Reminder',
      message: 'Research committee meeting scheduled for tomorrow.',
      time: '3 days ago',
      unread: false
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleViewAllNotifications = () => {
    setShowNotifications(false);
    onPageChange('notifications');
  };

  return (
    <header className="bg-red-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* University Logo */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-red-600"></div>
          </div>
        </div>
        
        {/* University Title */}
        <div>
          <h1 className="text-lg font-bold">UNIVERSITY OF SOUTHEASTERN PHILIPPINES</h1>
          <p className="text-sm">Research, Development and Extension</p>
        </div>
      </div>
      
      {/* User Controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/* Notification Button */}
          <div className="relative">
            <button 
              className="p-2 hover:bg-red-700 rounded-full relative"
              onClick={handleNotificationClick}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4a2 2 0 00-1.8 1.1L1 8.5v8a2 2 0 002 2h14a2 2 0 002-2v-8l-1.39-3.4A2 2 0 0015.81 4H4.19z" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-800 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                {/* Dropdown Header */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                    <span className="text-sm text-gray-500">{unreadCount} unread</span>
                  </div>
                </div>

                {/* Notification List */}
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        notification.unread ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800">
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                <div className="px-4 py-3 border-t border-gray-200">
                  <button
                    onClick={handleViewAllNotifications}
                    className="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium py-2 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm">John Henry Talite</span>
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 