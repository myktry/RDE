import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function SDGReport({ data, options }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Sustainable Development Goal (SDG) Report
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* RDE */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 flex items-center justify-center mb-4">
            <Doughnut 
              data={data.rde} 
              options={{
                ...options,
                maintainAspectRatio: true,
                responsive: true,
                plugins: {
                  ...options.plugins,
                  legend: {
                    display: false
                  }
                }
              }} 
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Research and Development Division
          </span>
        </div>

        {/* EXT */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 flex items-center justify-center mb-4">
            <Doughnut 
              data={data.ext} 
              options={{
                ...options,
                maintainAspectRatio: true,
                responsive: true,
                plugins: {
                  ...options.plugins,
                  legend: {
                    display: false
                  }
                }
              }} 
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Extension Division
          </span>
        </div>

        {/* KTTD */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 flex items-center justify-center mb-4">
            <Doughnut 
              data={data.kttd} 
              options={{
                ...options,
                maintainAspectRatio: true,
                responsive: true,
                plugins: {
                  ...options.plugins,
                  legend: {
                    display: false
                  }
                }
              }} 
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            KTTD
          </span>
        </div>
      </div>

      <footer className="text-center text-xs text-gray-600 mt-8 pt-4 border-t border-gray-200">
        © 2025 University Of Southeastern Philippines. All rights reserved.
      </footer>
    </div>
  );
}
