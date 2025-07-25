import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function SDGReport({ data, options }) {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded p-6">
        <h2 className="text-lg font-semibold mb-6">
          Sustainable Development Goal (SDG) Report
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {/* RDE */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-100 h-40 relative">
              <Doughnut data={data.rde} options={options} />
            </div>
            <span className="text-sm mt-2">Research and Development Division</span>
          </div>

          {/* EXT */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-100 h-40 relative">
              <Doughnut data={data.ext} options={options} />
            </div>
            <span className="text-sm mt-2">Extension Division</span>
          </div>

          {/* KTTD */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-100 h-40 relative">
              <Doughnut data={data.kttd} options={options} />
            </div>
            <span className="text-sm mt-2">KTTD</span>
          </div>
        </div>

        <footer className="text-center text-xs text-gray-600 mt-8">
          © 2025 University Of Southeastern Philippines. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
