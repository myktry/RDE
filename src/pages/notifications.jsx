import React, { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { FaBell, FaCheck, FaTimes, FaFilter, FaSearch, FaEye, FaTrash } from 'react-icons/fa';

const Notifications = () => {
  const [filter, setFilter] = useState('all'); // all, unread, read
  const [searchTerm, setSearchTerm] = useState('');

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New Proposal Submitted",
      message: "A new proposal has been submitted for review by Kyla Bea Dorin",
      time: "2 minutes ago",
      unread: true,
      type: "proposal"
    },
    {
      id: 2,
      title: "Proposal Approved",
      message: "Your proposal 'Renewable Energy Implementation' has been approved by the review committee",
      time: "1 hour ago",
      unread: true,
      type: "approval"
    },
    {
      id: 3,
      title: "System Update",
      message: "System maintenance scheduled for tomorrow at 2 AM. Please save your work.",
      time: "3 hours ago",
      unread: false,
      type: "system"
    },
    {
      id: 4,
      title: "Document Uploaded",
      message: "New supporting documents have been uploaded for proposal PRO-2025-00001",
      time: "1 day ago",
      unread: false,
      type: "document"
    },
    {
      id: 5,
      title: "Meeting Reminder",
      message: "You have a meeting scheduled with the research team in 30 minutes",
      time: "2 days ago",
      unread: false,
      type: "meeting"
    },
    {
      id: 6,
      title: "Budget Update",
      message: "The budget for your research project has been updated. Please review the changes.",
      time: "3 days ago",
      unread: false,
      type: "budget"
    },
    {
      id: 7,
      title: "Deadline Extension",
      message: "The deadline for proposal submission has been extended to next Friday",
      time: "1 week ago",
      unread: false,
      type: "deadline"
    },
    {
      id: 8,
      title: "New Team Member",
      message: "Dr. Sarah Johnson has been added to your research team",
      time: "1 week ago",
      unread: false,
      type: "team"
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && notification.unread) ||
      (filter === 'read' && !notification.unread);
    
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => n.unread).length;
  const readCount = notifications.filter(n => !n.unread).length;

  const markAsRead = (id) => {
    // In a real app, this would update the backend
    console.log('Mark as read:', id);
  };

  const deleteNotification = (id) => {
    // In a real app, this would delete from backend
    console.log('Delete notification:', id);
  };

  const markAllAsRead = () => {
    // In a real app, this would update all notifications
    console.log('Mark all as read');
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'proposal': return 'bg-blue-100 text-blue-800';
      case 'approval': return 'bg-green-100 text-green-800';
      case 'system': return 'bg-yellow-100 text-yellow-800';
      case 'document': return 'bg-purple-100 text-purple-800';
      case 'meeting': return 'bg-orange-100 text-orange-800';
      case 'budget': return 'bg-red-100 text-red-800';
      case 'deadline': return 'bg-pink-100 text-pink-800';
      case 'team': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-72">
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaBell className="text-2xl text-red-600" />
                  <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-600">{unreadCount}</span> unread, 
                    <span className="font-semibold text-gray-600"> {readCount}</span> read
                  </div>
                  <button
                    onClick={markAllAsRead}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Mark All as Read
                  </button>
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                {/* Filter Buttons */}
                <div className="flex items-center space-x-2">
                  <FaFilter className="text-gray-500" />
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      filter === 'all' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All ({notifications.length})
                  </button>
                  <button
                    onClick={() => setFilter('unread')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      filter === 'unread' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Unread ({unreadCount})
                  </button>
                  <button
                    onClick={() => setFilter('read')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      filter === 'read' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Read ({readCount})
                  </button>
                </div>

                {/* Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full md:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {filteredNotifications.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-6 hover:bg-gray-50 transition-colors ${
                        notification.unread ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Notification Icon */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                        }`}>
                          <FaBell className={`w-5 h-5 ${
                            notification.unread ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>

                        {/* Notification Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className={`text-lg font-semibold ${
                                  notification.unread ? 'text-gray-900' : 'text-gray-700'
                                }`}>
                                  {notification.title}
                                </h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                                  {notification.type}
                                </span>
                                {notification.unread && (
                                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                )}
                              </div>
                              <p className="text-gray-600 mb-2">{notification.message}</p>
                              <p className="text-sm text-gray-500">{notification.time}</p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          {notification.unread && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                              title="Mark as read"
                            >
                              <FaCheck className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Delete notification"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <FaBell className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
                  <p className="text-gray-500">
                    {searchTerm ? 'Try adjusting your search terms' : 'You\'re all caught up!'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications; 