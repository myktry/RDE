import React, { useState, useEffect } from 'react';
import ProposalDetails from '../components/ProposalDetails';

const EndorsementPage = () => {
  const [year, setYear] = useState('2025');
  const [division, setDivision] = useState('');
  const [search, setSearch] = useState('');
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const divisions = [
    'Research and Development Division',
    'Knowledge and Technology Transfer Division',
    'Extension Division'
  ];

  const endorsements = [
    { id: 1, division: 'Research and Development Division', dateOfEndorsement: 'February 24, 2025', title: 'Renewable Energy Implementation' },
    { id: 2, division: 'Knowledge and Technology Transfer Division', dateOfEndorsement: 'February 24, 2025', title: 'ARAY KO: Identifying pain through eye contact' },
    { id: 3, division: 'Extension Division', dateOfEndorsement: 'February 24, 2025', title: 'MwaMwa: Family is love' },
    { id: 4, division: 'Knowledge and Technology Transfer Division', dateOfEndorsement: 'February 24, 2025', title: 'SportShield: Real-time Monitoring for Athletes' },
    { id: 5, division: 'Knowledge and Technology Transfer Division', dateOfEndorsement: 'February 24, 2025', title: 'HaHaHa Katawa: Ananlyzing Smile Dynamics for Psyc' },
    { id: 6, division: 'Research and Development Division', dateOfEndorsement: 'February 25, 2025', title: 'AI-Powered Disease Detection System' },
    { id: 7, division: 'Extension Division', dateOfEndorsement: 'February 26, 2025', title: 'Smart Farming Technology Implementation' },
    { id: 8, division: 'Research and Development Division', dateOfEndorsement: 'February 27, 2025', title: 'Urban Planning with GIS Integration' },
    { id: 9, division: 'Knowledge and Technology Transfer Division', dateOfEndorsement: 'February 28, 2025', title: 'Machine Learning for Climate Prediction' },
    { id: 10, division: 'Extension Division', dateOfEndorsement: 'March 1, 2025', title: 'Digital Humanities Research Platform' },
    { id: 11, division: 'Research and Development Division', dateOfEndorsement: 'March 2, 2025', title: 'Telemedicine Solutions for Rural Areas' },
    { id: 12, division: 'Extension Division', dateOfEndorsement: 'March 3, 2025', title: 'Sustainable Crop Management System' }
  ];

  // Check for selected project from tracker on component mount
  useEffect(() => {
    const selectedProjectData = localStorage.getItem('selectedProjectForEndorsement');
    if (selectedProjectData) {
      try {
        const project = JSON.parse(selectedProjectData);
        // Create a new endorsement entry for the selected project
        const newEndorsement = {
          id: Date.now(), // Generate a unique ID
          division: 'Research and Development Division', // Default division
          dateOfEndorsement: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          title: project.title,
          author: project.author,
          proposalId: project.proposalId,
          college: project.college,
          status: 'Pending Endorsement'
        };
        setSelectedProposal(newEndorsement);
        // Clear the localStorage data
        localStorage.removeItem('selectedProjectForEndorsement');
      } catch (error) {
        console.error('Error parsing selected project data:', error);
        localStorage.removeItem('selectedProjectForEndorsement');
      }
    }
  }, []);

  const handleViewClick = (proposal) => setSelectedProposal(proposal);
  const handleBack = () => setSelectedProposal(null);

  // Filter endorsements based on search and filters
  const filteredEndorsements = endorsements.filter(endorsement => {
    const matchesSearch = endorsement.title.toLowerCase().includes(search.toLowerCase()) ||
                         endorsement.division.toLowerCase().includes(search.toLowerCase());
    const matchesDivision = !division || endorsement.division === division;
    return matchesSearch && matchesDivision;
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
            <span className="text-sm font-medium text-gray-700">Division:</span>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors min-w-48"
            >
              <option value="">All Divisions</option>
              {divisions.map((div, index) => (
                <option key={index} value={div}>{div}</option>
              ))}
            </select>
          </div>
          
          <SortIcon />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Research Endorsements
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Manage and track research project endorsements across divisions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Division</th>
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
                      <div className="text-sm font-medium text-gray-900 max-w-xs">{endorsement.division}</div>
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