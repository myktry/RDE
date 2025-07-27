import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { FaCamera, FaEdit, FaTrash } from 'react-icons/fa';

const Account = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Account</h1>
            
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <div className="flex items-start space-x-4">
                {/* Profile Picture */}
                <div className="relative flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-gray-200"
                  />
                  <div className="absolute bottom-0 right-0">
                    <button className="bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition-colors">
                      <FaCamera className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    John Henry Talite (OP Staff)
                  </h2>
                  <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 mb-1 text-sm">
                    <FaCamera className="w-3 h-3" />
                    <span>Change Photo</span>
                  </button>
                  <p className="text-xs text-gray-600">
                    PNG, JPEG or PNG, Max size 10mb
                  </p>
                </div>
              </div>
            </div>
            
            {/* User Details Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">User Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700 text-sm">Name:</span>
                    <span className="text-gray-800 text-sm">John Henry Talite</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700 text-sm">Username:</span>
                    <span className="text-gray-800 text-sm">OP Staff</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700 text-sm">Office:</span>
                    <span className="text-gray-800 text-sm">Office of the President</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700 text-sm">Password:</span>
                    <span className="text-gray-800 text-sm">**********</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm">
                <FaEdit className="w-3 h-3" />
                <span>Edit</span>
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm">
                <FaTrash className="w-3 h-3" />
                <span>Delete Account</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;
