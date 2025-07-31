import React from 'react';

const StatsCard = ({ title, value, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="text-center">
        <div className="text-3xl font-bold text-red-800 mb-2">{value}</div>
        <div className="text-sm text-red-800">{title}</div>
      </div>
    </div>
  );
};

export default StatsCard; 