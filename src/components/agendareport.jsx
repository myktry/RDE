import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function AgendaReport({ data }) {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Achieved RDE Agenda Report
      </h3>

      {/* Agenda Bars */}
      <div className="space-y-6">
        {data.map((agenda, idx) => {
          const total = agenda.rdeg + agenda.kttd + agenda.ext || 1;
          const rdegPct = (agenda.rdeg / total) * 100;
          const kttdPct = (agenda.kttd / total) * 100;
          const extPct = (agenda.ext / total) * 100;

          return (
            <div key={idx} className="group">
              <div className="mb-3 font-medium text-gray-800 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-800">{agenda.label}</h4>
                <p className="text-sm text-gray-600 mt-1">Total: {total} achievements</p>
              </div>
              
              <div className="relative">
                <div className="flex h-8 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 transition-all duration-300 cursor-pointer relative group/bar"
                    style={{ width: `${rdegPct}%` }}
                    data-tooltip-id="agenda-tooltip"
                    data-tooltip-content={`Research & Development Division: ${agenda.rdeg} achievements (${rdegPct.toFixed(1)}%)`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/bar:opacity-20 transition-opacity duration-200"></div>
                  </div>
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 cursor-pointer relative group/bar"
                    style={{ width: `${kttdPct}%` }}
                    data-tooltip-id="agenda-tooltip"
                    data-tooltip-content={`Knowledge Transfer & Technology Development: ${agenda.kttd} achievements (${kttdPct.toFixed(1)}%)`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/bar:opacity-20 transition-opacity duration-200"></div>
                  </div>
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 transition-all duration-300 cursor-pointer relative group/bar"
                    style={{ width: `${extPct}%` }}
                    data-tooltip-id="agenda-tooltip"
                    data-tooltip-content={`Extension Division: ${agenda.ext} achievements (${extPct.toFixed(1)}%)`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/bar:opacity-20 transition-opacity duration-200"></div>
                  </div>
                </div>
                
                {/* Percentage labels */}
                <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
                  <span className="font-medium">RDEG: {rdegPct.toFixed(1)}%</span>
                  <span className="font-medium">KTTD: {kttdPct.toFixed(1)}%</span>
                  <span className="font-medium">EXT: {extPct.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Legend */}
      <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Legend</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-sm"></div>
            <div>
              <span className="font-semibold text-gray-800">RDEG</span>
              <p className="text-xs text-gray-600">Research & Development Division</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
            <div>
              <span className="font-semibold text-gray-800">KTTD</span>
              <p className="text-xs text-gray-600">Knowledge Transfer & Technology Development</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm"></div>
            <div>
              <span className="font-semibold text-gray-800">Extension</span>
              <p className="text-xs text-gray-600">Extension Division</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tooltip */}
      <ReactTooltip 
        id="agenda-tooltip" 
        place="top" 
        effect="solid"
        className="max-w-xs"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          color: '#374151',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          padding: '12px',
          fontSize: '13px',
          fontWeight: '500',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      />
    </section>
  );
}
