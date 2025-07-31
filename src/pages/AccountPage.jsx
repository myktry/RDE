import React from 'react';

const AccountPage = () => {
  const userProfile = {
    name: 'John Henry Talite',
    email: 'john.talite@usep.edu.ph',
    role: 'Research Coordinator',
    department: 'Research, Development and Extension',
    phone: '+63 912 345 6789',
    joinDate: 'January 2020',
    avatar: 'JH'
  };

  const recentActivities = [
    {
      id: 1,
      action: 'Updated project progress',
      project: 'ARAY KO: Identifying pain through eye contact',
      date: '2025-01-15 14:30'
    },
    {
      id: 2,
      action: 'Submitted endorsement request',
      project: 'Digital Transformation in Local Government',
      date: '2025-01-12 09:15'
    },
    {
      id: 3,
      action: 'Downloaded resource',
      project: 'Research Methodology Guide',
      date: '2025-01-10 16:45'
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Account</h1>
        <p className="text-gray-600">Manage your profile and settings</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {userProfile.avatar}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{userProfile.name}</h2>
              <p className="text-gray-600">{userProfile.role}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-sm text-gray-900">{userProfile.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <p className="text-sm text-gray-900">{userProfile.department}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <p className="text-sm text-gray-900">{userProfile.phone}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                <p className="text-sm text-gray-900">{userProfile.joinDate}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Settings and Activities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-800">Email Notifications</h4>
                  <p className="text-sm text-gray-600">Receive updates about your projects</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-800">Dark Mode</h4>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-800">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                  Enable
                </button>
              </div>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.project}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage; 