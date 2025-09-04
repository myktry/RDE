import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "New Research Proposal Submitted",
      description: "A new research proposal has been submitted for review.",
      time: "2 hours ago",
      unread: true,
      icon: "document"
    },
    {
      id: 2,
      title: "Progress Report Due",
      description: "Monthly progress report is due in 3 days.",
      time: "1 day ago",
      unread: true,
      icon: "clock"
    },
    {
      id: 3,
      title: "Endorsement Approved",
      description: "Your research endorsement has been approved by the committee.",
      time: "2 days ago",
      unread: false,
      icon: "check"
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'document':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'check':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-red-900 via-red-800 to-orange-700 text-white shadow-lg border-b border-red-800/50 fixed top-0 z-20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
          <img 
            src="/usep-logo.png" 
            alt="University of Southeastern Philippines Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
        
          <div className="leading-tight">
            <div className="text-base font-bold uppercase tracking-wider text-white/95">University of Southeastern Philippines</div>
            <div className="text-sm text-white/80 font-medium">OSUURU</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-105 shadow-md"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v3.75l1.5 1.5H3l1.5-1.5V9.75a6 6 0 0 1 6-6z" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-400 text-xs font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Popup */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    <span className="text-sm text-gray-500">{unreadCount} unread</span>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="text-blue-600">
                              {getIcon(notification.icon)}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            {notification.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                          <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <button 
                    onClick={() => navigate('/notifications')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
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
  )
}


