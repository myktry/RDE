import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Camera, Edit, Trash2 } from 'lucide-react';

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@usep.edu.ph',
    username: 'johndoe',
    department: 'Research and Development',
    position: 'Research Coordinator',
    phone: '+63 912 345 6789',
    employeeId: 'EMP-2024-001',
    dateJoined: 'January 15, 2024',
    lastLogin: 'August 12, 2024'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save the data to the backend
    console.log('Saving user data:', userData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
      // In a real app, you would call the delete API
    }
  };

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
                </div>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-red-600 border-2 border-white rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-red-700">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {userData.firstName} {userData.lastName}
              </h2>
              <p className="text-gray-600 mb-4">@{userData.username}</p>
              
              <button className="bg-red-600 text-white border-none py-2.5 px-5 rounded-lg text-sm font-medium cursor-pointer transition-colors hover:bg-red-700 flex items-center gap-2 mb-2">
                <Camera className="w-4 h-4" />
                Change Photo
              </button>
              <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">User Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{userData.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{userData.lastName}</p>
                )}
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{userData.email}</p>
                )}
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">@{userData.username}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Department
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{userData.department}</p>
                )}
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Position
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{userData.position}</p>
                )}
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{userData.phone}</p>
                )}
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Employee ID
                </label>
                <p className="text-sm text-gray-900 font-medium">{userData.employeeId}</p>
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Date Joined
                </label>
                <p className="text-sm text-gray-900 font-medium">{userData.dateJoined}</p>
              </div>
              
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                  Last Login
                </label>
                <p className="text-sm text-gray-900 font-medium">{userData.lastLogin}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleEdit}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
                <button
                  onClick={handleDelete}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage; 