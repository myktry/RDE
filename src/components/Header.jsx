import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Research Proposal Submitted',
      message: 'A new research proposal has been submitted for review.',
      time: '2 hours ago',
      unread: true,
      type: 'proposal'
    },
    {
      id: 2,
      title: 'Progress Report Due',
      message: 'Monthly progress report is due in 3 days.',
      time: '1 day ago',
      unread: true,
      type: 'reminder'
    },
    {
      id: 3,
      title: 'Endorsement Approved',
      message: 'Your research endorsement has been approved by the committee.',
      time: '2 days ago',
      unread: false,
      type: 'approval'
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const getTypeIcon = (type) => {
    const iconClass = "w-4 h-4";
    
    switch (type) {
      case 'proposal':
        return (
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <svg className={`${iconClass} text-red-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      case 'reminder':
        return (
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
            <svg className={`${iconClass} text-amber-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'approval':
        return (
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className={`${iconClass} text-green-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className={`${iconClass} text-gray-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4a2 2 0 00-1.8 1.1L1 8.5v8a2 2 0 002 2h14a2 2 0 002-2v-8l-1.39-3.4A2 2 0 0015.81 4H4.19z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <header className="bg-gradient-to-r from-red-800 to-orange-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center">
            <img 
              src="/usep-logo.png" 
              alt="USeP Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold mb-1">UNIVERSITY OF SOUTHEASTERN PHILIPPINES</h1>
            <p className="text-sm opacity-90">Research and Development Division</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* Bell Icon for Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-white hover:bg-red-700 rounded-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4a2 2 0 00-1.8 1.1L1 8.5v8a2 2 0 002 2h14a2 2 0 002-2v-8l-1.39-3.4A2 2 0 0015.81 4H4.19z" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* Message Icon */}
        <div className="relative">
          <button
            onClick={() => navigate('/messages')}
            className="relative p-2 text-white hover:bg-red-700 rounded-lg transition-colors duration-200"
            title="Messages"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Unread message indicator */}
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>
      </div>
      
      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4a2 2 0 00-1.8 1.1L1 8.5v8a2 2 0 002 2h14a2 2 0 002-2v-8l-1.39-3.4A2 2 0 0015.81 4H4.19z" />
                </svg>
                <p>No notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 transition-colors duration-200 ${
                      notification.unread ? 'bg-red-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {getTypeIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-semibold text-gray-900">
                            {notification.title}
                          </h4>
                          {notification.unread && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {notifications.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <button 
                onClick={() => {
                  setShowNotifications(false);
                  navigate('/notifications');
                }}
                className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header; 