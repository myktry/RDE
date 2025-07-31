import React, { useState } from 'react';
import ProposalDetails from '../components/ProposalDetails';

const EndorsementPage = () => {
  const [year, setYear] = useState('2025');
  const [researchCenter, setResearchCenter] = useState('');
  const [search, setSearch] = useState('');
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const researchCenters = [
    'Geospatial, IOT, Solutions and Technology',
    'Mindanao Center for Informatics and Intelligent Systems',
    'Research and Development Center for Arts and Sciences',
    'Center for Health Research and Development',
    'Center for Agricultural Research and Development'
  ];

  const endorsements = [
    { id: 1, researchCenter: 'Geospatial, IOT, Solutions and Technology', dateOfEndorsement: 'February 24, 2025', title: 'Renewable Energy Implementation' },
    { id: 2, researchCenter: 'Mindanao Center for Informatics and Intelligent Systems', dateOfEndorsement: 'February 24, 2025', title: 'ARAY KO: Identifying pain through eye contact' },
    { id: 3, researchCenter: 'Research and Development Center for Arts and Sciences', dateOfEndorsement: 'February 24, 2025', title: 'MwaMwa: Family is love' },
    { id: 4, researchCenter: 'Mindanao Center for Informatics and Intelligent Systems', dateOfEndorsement: 'February 24, 2025', title: 'SportShield: Real-time Monitoring for Athletes' },
    { id: 5, researchCenter: 'Mindanao Center for Informatics and Intelligent Systems', dateOfEndorsement: 'February 24, 2025', title: 'HaHaHa Katawa: Ananlyzing Smile Dynamics for Psyc' },
    { id: 6, researchCenter: 'Center for Health Research and Development', dateOfEndorsement: 'February 25, 2025', title: 'AI-Powered Disease Detection System' },
    { id: 7, researchCenter: 'Center for Agricultural Research and Development', dateOfEndorsement: 'February 26, 2025', title: 'Smart Farming Technology Implementation' },
    { id: 8, researchCenter: 'Geospatial, IOT, Solutions and Technology', dateOfEndorsement: 'February 27, 2025', title: 'Urban Planning with GIS Integration' },
    { id: 9, researchCenter: 'Mindanao Center for Informatics and Intelligent Systems', dateOfEndorsement: 'February 28, 2025', title: 'Machine Learning for Climate Prediction' },
    { id: 10, researchCenter: 'Research and Development Center for Arts and Sciences', dateOfEndorsement: 'March 1, 2025', title: 'Digital Humanities Research Platform' },
    { id: 11, researchCenter: 'Center for Health Research and Development', dateOfEndorsement: 'March 2, 2025', title: 'Telemedicine Solutions for Rural Areas' },
    { id: 12, researchCenter: 'Center for Agricultural Research and Development', dateOfEndorsement: 'March 3, 2025', title: 'Sustainable Crop Management System' }
  ];

  const handleViewClick = (proposal) => setSelectedProposal(proposal);
  const handleBack = () => setSelectedProposal(null);

  // Filter endorsements based on search and filters
  const filteredEndorsements = endorsements.filter(endorsement => {
    const matchesSearch = endorsement.title.toLowerCase().includes(search.toLowerCase()) ||
                         endorsement.researchCenter.toLowerCase().includes(search.toLowerCase());
    const matchesCenter = !researchCenter || endorsement.researchCenter === researchCenter;
    return matchesSearch && matchesCenter;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEndorsements = filteredEndorsements.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEndorsements.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  if (selectedProposal) {
    return <ProposalDetails proposal={selectedProposal} onBack={handleBack} />;
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

  const FilterBar = () => (
    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1 min-w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search endorsements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          />
        </div>
        
        {/* Filters */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FilterIcon />
            <span className="text-sm font-medium text-gray-700">Year:</span>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Center:</span>
            <select
              value={researchCenter}
              onChange={(e) => setResearchCenter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors min-w-48"
            >
              <option value="">All Centers</option>
              {researchCenters.map((center, index) => (
                <option key={index} value={center}>{center}</option>
              ))}
            </select>
          </div>
          
          <SortIcon />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Research Endorsements</h1>
          <p className="text-gray-600">Manage and track research project endorsements across centers</p>
        </div>

        {/* Main Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-teal-50">
            <h2 className="text-xl font-semibold text-gray-900">Endorsed Research Projects</h2>
            <p className="text-sm text-gray-600 mt-1">{filteredEndorsements.length} records found</p>
          </div>
          
          {/* Filter Bar */}
          <FilterBar />
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">No</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Research Center</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date of Endorsement</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {currentEndorsements.map((endorsement, index) => (
                  <tr key={endorsement.id} className="hover:bg-emerald-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                        {String(indexOfFirstItem + index + 1).padStart(2, '0')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 max-w-xs">{endorsement.researchCenter}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{endorsement.dateOfEndorsement}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 max-w-sm truncate" title={endorsement.title}>
                        {endorsement.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleViewClick(endorsement)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-150"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredEndorsements.length)} of {filteredEndorsements.length} results
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        currentPage === page
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EndorsementPage;