import React from 'react';

const Account = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          John Henry Talite (OP Staff)
        </h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Change Photo
        </button>
      </header>

      <div className="flex items-center mb-4">
        <img
          src="profile-picture-url"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
        />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2">
          <span className="font-bold">Name:</span>
          <span>John Henry Talite</span>
          
          <span className="font-bold">Username:</span>
          <span>OP Staff</span>
          
          <span className="font-bold">Office:</span>
          <span>Office of the President</span>
          
          <span className="font-bold">Password:</span>
          <span>********</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
