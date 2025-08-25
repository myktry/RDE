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
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Account</h1>
            
            {/* Profile Information Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <div className="flex items-start space-x-6">
                {/* Profile Picture */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center relative">
                    <div className="text-white text-center text-sm font-medium leading-tight">
                      <div>John Henry</div>
                      <div>Talite</div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <button className="bg-white text-red-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                        <FaCamera className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    John Henry Talite
                  </h2>
                  <p className="text-gray-600 mb-4">(OP Staff)</p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 mb-2 text-sm font-medium">
                    <FaCamera className="w-3 h-3" />
                    <span>Change Photo</span>
                  </button>
                  <p className="text-xs text-gray-500">
                    PNG, JPEG or PNG, Max size 10mb
                  </p>
                </div>
              </div>
            </div>
            
            {/* User Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">User Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Name:</span>
                    <span className="text-gray-600">John Henry Talite</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Office:</span>
                    <span className="text-gray-600">Office of the President</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Username:</span>
                    <span className="text-gray-600">OP Staff</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Password:</span>
                    <span className="text-gray-600">••••••••••</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm font-medium">
                <FaEdit className="w-3 h-3" />
                <span>Edit</span>
              </button>
              <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm font-medium">
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
