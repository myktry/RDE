import React, { useState } from 'react';

const StatisticsPage = () => {
  const [fromYear, setFromYear] = useState('2025');
  const [toYear, setToYear] = useState('2025');
  const [hoveredBar, setHoveredBar] = useState(null);

  const handleMouseMove = (e) => {
    if (hoveredBar) {
      setHoveredBar(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    }
  };

  const divisionData = [
    {
      name: 'Research and Development Division',
      color: 'bg-red-600',
      ongoing: 45,
      completed: 23
    },
    {
      name: 'Knowledge and Technology Transfer Division',
      color: 'bg-orange-500',
      ongoing: 28,
      completed: 35
    },
    {
      name: 'Extension Division',
      color: 'bg-green-600',
      ongoing: 52,
      completed: 31
    }
  ];

  const agendaData = [
    { category: 'AAAF', rddCompleted: 12, rddOngoing: 8, kttdCompleted: 6, kttdOngoing: 4, edCompleted: 9, edOngoing: 5 },
    { category: 'B & T', rddCompleted: 15, rddOngoing: 10, kttdCompleted: 8, kttdOngoing: 6, edCompleted: 12, edOngoing: 7 },
    { category: 'SSE', rddCompleted: 9, rddOngoing: 12, kttdCompleted: 11, kttdOngoing: 8, edCompleted: 7, edOngoing: 9 },
    { category: 'E & T', rddCompleted: 18, rddOngoing: 14, kttdCompleted: 13, kttdOngoing: 9, edCompleted: 15, edOngoing: 11 },
    { category: 'ENR', rddCompleted: 11, rddOngoing: 16, kttdCompleted: 9, kttdOngoing: 12, edCompleted: 13, edOngoing: 8 },
    { category: 'H & W', rddCompleted: 14, rddOngoing: 11, kttdCompleted: 16, kttdOngoing: 7, edCompleted: 10, edOngoing: 14 },
    { category: 'P & S', rddCompleted: 13, rddOngoing: 9, kttdCompleted: 12, kttdOngoing: 10, edCompleted: 11, edOngoing: 13 }
  ];

  const dostData = [
    { category: 'Publication', rddCompleted: 8, rddOngoing: 5, kttdCompleted: 6, kttdOngoing: 4, edCompleted: 7, edOngoing: 3 },
    { category: 'Patent', rddCompleted: 12, rddOngoing: 8, kttdCompleted: 9, kttdOngoing: 6, edCompleted: 10, edOngoing: 5 },
    { category: 'Product', rddCompleted: 15, rddOngoing: 10, kttdCompleted: 11, kttdOngoing: 7, edCompleted: 13, edOngoing: 8 },
    { category: 'People Services', rddCompleted: 9, rddOngoing: 12, kttdCompleted: 14, kttdOngoing: 9, edCompleted: 11, edOngoing: 6 },
    { category: 'Places and Partnership', rddCompleted: 11, rddOngoing: 7, kttdCompleted: 8, kttdOngoing: 11, edCompleted: 12, edOngoing: 9 },
    { category: 'Policies', rddCompleted: 6, rddOngoing: 9, kttdCompleted: 7, kttdOngoing: 8, edCompleted: 9, edOngoing: 7 }
  ];

  const sdgData = [
    { sdg: 1, rdd: 15, kttd: 12, ed: 18 },
    { sdg: 2, rdd: 22, kttd: 16, ed: 14 },
    { sdg: 3, rdd: 18, kttd: 20, ed: 25 },
    { sdg: 4, rdd: 25, kttd: 18, ed: 22 },
    { sdg: 5, rdd: 16, kttd: 14, ed: 19 },
    { sdg: 6, rdd: 20, kttd: 22, ed: 16 },
    { sdg: 7, rdd: 14, kttd: 19, ed: 21 },
    { sdg: 8, rdd: 23, kttd: 17, ed: 15 },
    { sdg: 9, rdd: 19, kttd: 25, ed: 20 },
    { sdg: 10, rdd: 17, kttd: 13, ed: 18 },
    { sdg: 11, rdd: 21, kttd: 16, ed: 23 },
    { sdg: 12, rdd: 15, kttd: 20, ed: 17 },
    { sdg: 13, rdd: 24, kttd: 18, ed: 19 },
    { sdg: 14, rdd: 18, kttd: 21, ed: 22 },
    { sdg: 15, rdd: 20, kttd: 15, ed: 24 },
    { sdg: 16, rdd: 16, kttd: 19, ed: 21 },
    { sdg: 17, rdd: 22, kttd: 23, ed: 18 }
  ];

  const getMaxValue = (data) => {
    return Math.max(...data.map(item => 
      Math.max(item.rddCompleted + item.rddOngoing, item.kttdCompleted + item.kttdOngoing, item.edCompleted + item.edOngoing)
    ));
  };

  const getMaxSDGValue = (data) => {
    return Math.max(...data.map(item => item.rdd + item.kttd + item.ed));
  };

  const maxValue = getMaxValue(agendaData);
  const maxDostValue = getMaxValue(dostData);
  const maxSDGValue = getMaxSDGValue(sdgData);

  return (
    <div className="p-6 bg-gray-100 h-full overflow-y-auto" onMouseMove={handleMouseMove}>
      {/* Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">From Year:</label>
              <select
                value={fromYear}
                onChange={(e) => setFromYear(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            
            <span className="text-gray-500">-</span>
            
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">To Year:</label>
              <select
                value={toYear}
                onChange={(e) => setToYear(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Project Status Overview of the Three Divisions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Project Status Overview of the Three Divisions</h3>
        
        {/* Bar Chart */}
        <div className="flex items-end justify-between px-8 mb-6">
          {divisionData.map((division, index) => {
            const maxValue = Math.max(...divisionData.map(d => Math.max(d.ongoing, d.completed)));
            return (
              <div key={index} className="flex flex-col items-center space-y-4 flex-1">
                {/* Division Name */}
                <h4 className="text-sm font-medium text-gray-700 text-center max-w-40">{division.name}</h4>

                {/* Bar Group */}
                <div className="flex items-end space-x-4">
                  {/* On-going Bar */}
                  <div className="flex flex-col items-center space-y-2">
                    <div
                      className={`w-20 rounded-t-sm cursor-pointer transition-all duration-200 hover:opacity-80 ${division.color}`}
                      style={{ height: `${(division.ongoing / maxValue) * 200}px` }}
                      onMouseEnter={(e) => setHoveredBar({
                        type: 'On-going',
                        value: division.ongoing,
                        category: division.name,
                        x: e.clientX,
                        y: e.clientY
                      })}
                      onMouseLeave={() => setHoveredBar(null)}
                    ></div>
                    <span className="text-xs text-gray-600">On-going</span>
                  </div>

                  {/* Completed Bar */}
                  <div className="flex flex-col items-center space-y-2">
                  <div 
                      className={`w-20 rounded-t-sm cursor-pointer transition-all duration-200 hover:opacity-80 ${division.color}`}
                      style={{ height: `${(division.completed / maxValue) * 200}px` }}
                      onMouseEnter={(e) => setHoveredBar({
                        type: 'Completed',
                        value: division.completed,
                        category: division.name,
                        x: e.clientX,
                        y: e.clientY
                      })}
                      onMouseLeave={() => setHoveredBar(null)}
                  ></div>
                    <span className="text-xs text-gray-600">Completed</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Research and Development Division</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Knowledge and Technology Transfer Division</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Extension Division</span>
          </div>
        </div>
      </div>

      {/* RDE Agenda Progress Distribution by Division */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">RDE Agenda Progress Distribution by Division</h3>
        
        {/* Chart Container with Y-axis */}
        <div className="flex items-end space-x-6 mb-4">
          {/* Y-axis */}
          <div className="flex flex-col justify-between h-52 text-xs text-gray-500">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          {/* Bars */}
          <div className="flex-1 flex items-end justify-between">
            {agendaData.map((item, index) => {
              const maxDivisionValue = Math.max(
                item.rddCompleted + item.rddOngoing,
                item.kttdCompleted + item.kttdOngoing,
                item.edCompleted + item.edOngoing
              );
              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                  {/* Bar Group for each agenda category */}
                  <div className="flex items-end space-x-2">
                    {/* RDD Bar */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 relative" style={{ height: `${((item.rddCompleted + item.rddOngoing) / maxDivisionValue) * 200}px` }}>
                    <div className="h-full flex flex-col">
                          {/* RDD Ongoing - Blurred/Transparent Red */}
                      <div 
                            className="bg-[#b91c1c]/60 hover:bg-red-400/70 backdrop-blur-sm transition-all cursor-pointer"
                            style={{ height: `${(item.rddOngoing / (item.rddCompleted + item.rddOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'RDD Ongoing', value: item.rddOngoing, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                          {/* RDD Completed - Solid Red */}
                      <div 
                            className="bg-red-800 hover:bg-red-700 transition-colors cursor-pointer"
                            style={{ height: `${(item.rddCompleted / (item.rddCompleted + item.rddOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'RDD Completed', value: item.rddCompleted, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">RDD</span>
                    </div>

                    {/* KTTD Bar */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 relative" style={{ height: `${((item.kttdCompleted + item.kttdOngoing) / maxDivisionValue) * 200}px` }}>
                        <div className="h-full flex flex-col">
                          {/* KTTD Ongoing - Blurred/Transparent Yellow */}
                          <div
                            className="bg-yellow-300/70 bg-opacity-50 hover:bg-opacity-70 transition-all cursor-pointer"
                            style={{ height: `${(item.kttdOngoing / (item.kttdCompleted + item.kttdOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'KTTD Ongoing', value: item.kttdOngoing, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                          {/* KTTD Completed - Solid Yellow */}
                      <div 
                            className="bg-yellow-600 hover:bg-yellow-500 transition-colors cursor-pointer"
                            style={{ height: `${(item.kttdCompleted / (item.kttdCompleted + item.kttdOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'KTTD Completed', value: item.kttdCompleted, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">KTTD</span>
                    </div>

                    {/* ED Bar */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 relative" style={{ height: `${((item.edCompleted + item.edOngoing) / maxDivisionValue) * 200}px` }}>
                        <div className="h-full flex flex-col">
                          {/* ED Ongoing - Blurred/Transparent Green */}
                      <div 
                            className="bg-green-300/70 bg-opacity-50 hover:bg-opacity-70 transition-all cursor-pointer"
                            style={{ height: `${(item.edOngoing / (item.edCompleted + item.edOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'ED Ongoing', value: item.edOngoing, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                          {/* ED Completed - Solid Green */}
                      <div 
                            className="bg-green-700 hover:bg-green-600 transition-colors cursor-pointer"
                            style={{ height: `${(item.edCompleted / (item.edCompleted + item.edOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'ED Completed', value: item.edCompleted, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">ED</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 text-center mt-2">{item.category}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hover Tooltip */}
        {hoveredBar && (
          <div className="fixed bg-black text-white px-3 py-2 rounded-lg text-sm shadow-lg z-50 pointer-events-none"
            style={{
              left: hoveredBar.x,
              top: hoveredBar.y,
              transform: 'translate(-50%, -100%)',
              marginTop: '-10px'
            }}>
            <div className="font-semibold">{hoveredBar.category}</div>
            <div>{hoveredBar.type}: {hoveredBar.value}</div>
          </div>
        )}

        {/* Legend */}
        <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <span className="text-sm text-gray-600">RDD Completed</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 bg-opacity-50 rounded-full"></div>
              <span className="text-sm text-gray-600">RDD On-going</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              <span className="text-sm text-gray-600">KTTD Completed</span>
          </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-400 bg-opacity-50 rounded-full"></div>
              <span className="text-sm text-gray-600">KTTD On-going</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-700 rounded-full"></div>
              <span className="text-sm text-gray-600">ED Completed</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 bg-opacity-50 rounded-full"></div>
              <span className="text-sm text-gray-600">ED On-going</span>
          </div>
        </div>
      </div>

      {/* DOST 6P's Progress Distribution by Division */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">DOST 6P's Progress Distribution by Division</h3>
        
                {/* Chart Container with Y-axis */}
        <div className="flex items-end space-x-6 mb-4">
          {/* Y-axis */}
          <div className="flex flex-col justify-between h-52 text-xs text-gray-500">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          
          {/* Bars */}
          <div className="flex-1 flex items-end justify-between">
            {dostData.map((item, index) => {
              const maxDivisionValue = Math.max(
                item.rddCompleted + item.rddOngoing,
                item.kttdCompleted + item.kttdOngoing,
                item.edCompleted + item.edOngoing
              );
              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                  {/* Bar Group for each DOST category */}
                  <div className="flex items-end space-x-2">
                    {/* RDD Bar */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 relative" style={{ height: `${((item.rddCompleted + item.rddOngoing) / maxDivisionValue) * 200}px` }}>
                    <div className="h-full flex flex-col">
                          {/* RDD Ongoing - Blurred/Transparent Red */}
                      <div 
                            className="bg-[#b91c1c]/60 hover:bg-red-400/70 backdrop-blur-sm transition-all cursor-pointer"
                            style={{ height: `${(item.rddOngoing / (item.rddCompleted + item.rddOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'RDD Ongoing', value: item.rddOngoing, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                          {/* RDD Completed - Solid Red */}
                      <div 
                            className="bg-red-800 hover:bg-red-700 transition-colors cursor-pointer"
                            style={{ height: `${(item.rddCompleted / (item.rddCompleted + item.rddOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'RDD Completed', value: item.rddCompleted, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">RDD</span>
                    </div>

                    {/* KTTD Bar */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 relative" style={{ height: `${((item.kttdCompleted + item.kttdOngoing) / maxDivisionValue) * 200}px` }}>
                        <div className="h-full flex flex-col">
                          {/* KTTD Ongoing - Blurred/Transparent Yellow */}
                          <div 
                            className="bg-yellow-300/70 bg-opacity-50 hover:bg-opacity-70 transition-all cursor-pointer"
                            style={{ height: `${(item.kttdOngoing / (item.kttdCompleted + item.kttdOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'KTTD Ongoing', value: item.kttdOngoing, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                          {/* KTTD Completed - Solid Yellow */}
                      <div 
                            className="bg-yellow-600 hover:bg-yellow-500 transition-colors cursor-pointer"
                            style={{ height: `${(item.kttdCompleted / (item.kttdCompleted + item.kttdOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'KTTD Completed', value: item.kttdCompleted, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">KTTD</span>
                    </div>

                    {/* ED Bar */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 relative" style={{ height: `${((item.edCompleted + item.edOngoing) / maxDivisionValue) * 200}px` }}>
                        <div className="h-full flex flex-col">
                          {/* ED Ongoing - Blurred/Transparent Green */}
                      <div 
                            className="bg-green-300/70 bg-opacity-50 hover:bg-opacity-70 transition-all cursor-pointer"
                            style={{ height: `${(item.edOngoing / (item.edCompleted + item.edOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'ED Ongoing', value: item.edOngoing, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                          {/* ED Completed - Solid Green */}
                      <div 
                            className="bg-green-700 hover:bg-green-600 transition-colors cursor-pointer"
                            style={{ height: `${(item.edCompleted / (item.edCompleted + item.edOngoing)) * 100}%` }}
                            onMouseEnter={(e) => setHoveredBar({ type: 'ED Completed', value: item.edCompleted, category: item.category, x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">ED</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 text-center mt-2 max-w-20">{item.category}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <span className="text-sm text-gray-600">RDD Completed</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#b91c1c]/60 rounded-full"></div>
              <span className="text-sm text-gray-600">RDD On-going</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              <span className="text-sm text-gray-600">KTTD Completed</span>
          </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-300/70 rounded-full"></div>
              <span className="text-sm text-gray-600">KTTD On-going</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-700 rounded-full"></div>
              <span className="text-sm text-gray-600">ED Completed</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-300/70 rounded-full"></div>
              <span className="text-sm text-gray-600">ED On-going</span>
          </div>
        </div>
      </div>

      {/* Sustainable Development Goal Distribution by Division */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Sustainable Development Goal Distribution by Division</h3>
        
        <div className="overflow-x-auto">
          <div className="grid grid-cols-17 gap-1 items-end min-w-max">
            {sdgData.map((item, index) => {
              const totalHeight = (item.rdd + item.kttd + item.ed) / maxSDGValue * 200;
              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                                    <div className="w-12 relative" style={{ height: `${totalHeight}px` }}>
                    <div className="h-full flex flex-col">
                      {/* RDD */}
                      <div 
                        className="bg-red-600 hover:bg-red-500 transition-colors cursor-pointer rounded-t-sm"
                        style={{ height: `${(item.rdd / maxSDGValue) * 200}px` }}
                        onMouseEnter={(e) => setHoveredBar({ type: 'RDD', value: item.rdd, category: `SDG ${item.sdg}`, x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                      {/* KTTD */}
                      <div 
                        className="bg-orange-500 hover:bg-orange-400 transition-colors cursor-pointer"
                        style={{ height: `${(item.kttd / maxSDGValue) * 200}px` }}
                        onMouseEnter={(e) => setHoveredBar({ type: 'KTTD', value: item.kttd, category: `SDG ${item.sdg}`, x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                      {/* ED */}
                      <div 
                        className="bg-green-600 hover:bg-green-500 transition-colors cursor-pointer rounded-b-sm"
                        style={{ height: `${(item.ed / maxSDGValue) * 200}px` }}
                        onMouseEnter={(e) => setHoveredBar({ type: 'ED', value: item.ed, category: `SDG ${item.sdg}`, x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{item.sdg}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Research and Development Division</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Knowledge and Technology Transfer Division</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Extension Division</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage; 