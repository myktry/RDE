import React, { useState } from 'react';
import ProgressReportDetails from '../components/ProgressReportDetails';

const ProgressReportPage = () => {
  const [fromYear1, setFromYear1] = useState('2025');
  const [toYear1, setToYear1] = useState('2025');
  const [search1, setSearch1] = useState('');
  
  const [fromYear2, setFromYear2] = useState('2025');
  const [toYear2, setToYear2] = useState('2025');
  const [search2, setSearch2] = useState('');

  const [selectedReport, setSelectedReport] = useState(null);

  const completedProjects = [
    {
      id: 1,
      divisionId: 'RDE-001',
      division: 'Research and Development Division',
      dateSubmitted: 'March 20, 2025'
    },
    {
      id: 2,
      divisionId: 'RDE-002',
      division: 'Knowledge and Technology Transfer Division',
      dateSubmitted: 'March 25, 2025'
    },
    {
      id: 3,
      divisionId: 'RDE-003',
      division: 'Extension Division',
      dateSubmitted: 'March 20, 2025'
    },
    {
      id: 4,
      divisionId: 'RDE-001',
      division: 'Research and Development Division',
      dateSubmitted: 'March 20, 2025'
    },
    {
      id: 5,
      divisionId: 'RDE-002',
      division: 'Knowledge and Technology Transfer Division',
      dateSubmitted: 'March 25, 2025'
    },
    {
      id: 6,
      divisionId: 'RDE-003',
      division: 'Extension Division',
      dateSubmitted: 'March 28, 2025'
    }
  ];

  const monitoringMinutes = [
    {
      id: 1,
      monitoringId: '2025-00000',
      researchCenter: 'Agricultural Research, Technology, and Innovation Center',
      dateSubmitted: 'March 20, 2025'
    },
    {
      id: 2,
      monitoringId: '2025-00001',
      researchCenter: 'Center for Research in Entrepreneurship and Enterprise Development',
      dateSubmitted: 'March 21, 2025'
    },
    {
      id: 3,
      monitoringId: '2025-00022',
      researchCenter: 'Center for Research and Innovations in Industrial Technology',
      dateSubmitted: 'March 22, 2025'
    },
    {
      id: 4,
      monitoringId: '2025-00023',
      researchCenter: 'Center for Technology-Supported Learning',
      dateSubmitted: 'March 22, 2025'
    },
    {
      id: 5,
      monitoringId: '2025-00024',
      researchCenter: 'Geospatial, IOT, Solutions and Technology',
      dateSubmitted: 'March 24, 2025'
    },
    {
      id: 6,
      monitoringId: '2025-00025',
      researchCenter: 'Mindanao Center for Educational Research, Training and Innovation',
      dateSubmitted: 'March 25, 2025'
    },
    {
      id: 7,
      monitoringId: '2025-00026',
      researchCenter: 'Mindanao Center for Informatics and Intelligent Systems',
      dateSubmitted: 'March 26, 2025'
    },
    {
      id: 8,
      monitoringId: '2025-00027',
      researchCenter: 'Mindanao Center for Policy Studies',
      dateSubmitted: 'March 27, 2025'
    },
    {
      id: 9,
      monitoringId: '2025-00028',
      researchCenter: 'Mindanao Law and Peace Resource Institute',
      dateSubmitted: 'March 28, 2025'
    },
    {
      id: 10,
      monitoringId: '2025-00029',
      researchCenter: 'Research and Development Center for Arts and Sciences',
      dateSubmitted: 'March 29, 2025'
    },
    {
      id: 11,
      monitoringId: '2025-00030',
      researchCenter: 'Socio-economic Research and Data Analytics Center Mindanao',
      dateSubmitted: 'March 29, 2025'
    }
  ];

  const handleViewClick = (report) => {
    setSelectedReport(report);
  };

  const handleBack = () => {
    setSelectedReport(null);
  };

  if (selectedReport) {
    return <ProgressReportDetails report={selectedReport} onBack={handleBack} />;
  }

  const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const FilterIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );

  const SortIcon = () => (
    <svg className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );

  const FilterBar = ({ fromYear, setFromYear, toYear, setToYear, search, setSearch }) => (
    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1 min-w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        
        {/* Year Filters */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FilterIcon />
            <span className="text-sm font-medium text-gray-700">From:</span>
            <input
              type="text"
              value={fromYear}
              onChange={(e) => setFromYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">To:</span>
            <input
              type="text"
              value={toYear}
              onChange={(e) => setToYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          
          <SortIcon />
        </div>
      </div>
    </div>
  );

  const TableSection = ({ title, data, headers, renderRow, fromYear, setFromYear, toYear, setToYear, search, setSearch }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{data.length} records found</p>
      </div>
      
      {/* Filter Bar */}
      <FilterBar 
        fromYear={fromYear}
        setFromYear={setFromYear}
        toYear={toYear}
        setToYear={setToYear}
        search={search}
        setSearch={setSearch}
      />
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Reports</h1>
          <p className="text-gray-600">Monitor and track project progress across divisions and research centers</p>
        </div>

        {/* Section 1: Completed Project Reports */}
        <TableSection
          title="Completed Project Reports"
          data={completedProjects}
          headers={['No', 'Division ID', 'Division', 'Date Submitted', 'Action']}
          fromYear={fromYear1}
          setFromYear={setFromYear1}
          toYear={toYear1}
          setToYear={setToYear1}
          search={search1}
          setSearch={setSearch1}
          renderRow={(project, index) => (
            <tr key={project.id} className="hover:bg-blue-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {project.divisionId}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{project.division}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{project.dateSubmitted}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
                  onClick={() => handleViewClick(project)}
                >
                  View Details
                </button>
              </td>
            </tr>
          )}
        />

        {/* Section 2: Monitoring and Evaluation Minutes */}
        <TableSection
          title="Monitoring and Evaluation Minutes"
          data={monitoringMinutes}
          headers={['No', 'Monitoring ID', 'Research Center', 'Date Submitted', 'Action']}
          fromYear={fromYear2}
          setFromYear={setFromYear2}
          toYear={toYear2}
          setToYear={setToYear2}
          search={search2}
          setSearch={setSearch2}
          renderRow={(item, index) => (
            <tr key={item.id} className="hover:bg-indigo-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {item.monitoringId}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900 max-w-xs">{item.researchCenter}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{item.dateSubmitted}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
                  onClick={() => handleViewClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );
};

export default ProgressReportPage;