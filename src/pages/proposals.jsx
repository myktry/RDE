import React, { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import ProposalDetails from '../components/ProposalDetails';
import { FaEye, FaCheck, FaTimes, FaSearch, FaFilter, FaCalendar, FaUser, FaFileAlt } from 'react-icons/fa';

const Proposals = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Enhanced sample proposal data
  const proposals = [
    {
      id: 1,
      title: "Renewable Energy Implementation",
      submittedBy: "Kyla Bea Dorin",
      dateSubmitted: "July 11, 2025",
      status: "approved",
      category: "Infrastructure",
      budget: "₱2,500,000",
      duration: "18 months"
    },
    {
      id: 2,
      title: "Digital Learning Platform Development",
      submittedBy: "Maria Santos",
      dateSubmitted: "July 10, 2025",
      status: "approved",
      category: "Technology",
      budget: "₱1,800,000",
      duration: "12 months"
    },
    {
      id: 3,
      title: "Campus Security Enhancement",
      submittedBy: "John Smith",
      dateSubmitted: "July 9, 2025",
      status: "rejected",
      category: "Security",
      budget: "₱3,200,000",
      duration: "24 months"
    },
    {
      id: 4,
      title: "Student Wellness Center",
      submittedBy: "Dr. Anna Garcia",
      dateSubmitted: "July 8, 2025",
      status: "approved",
      category: "Health",
      budget: "₱4,500,000",
      duration: "30 months"
    },
    {
      id: 5,
      title: "Research Equipment Upgrade",
      submittedBy: "Prof. Carlos Rodriguez",
      dateSubmitted: "July 7, 2025",
      status: "rejected",
      category: "Research",
      budget: "₱1,200,000",
      duration: "6 months"
    }
  ];

  const handleViewDetails = (proposal) => {
    setSelectedProposal(proposal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProposal(null);
  };

  const handleApprove = (id) => {
    console.log('Approve proposal:', id);
    // Add approval logic here
    handleCloseModal();
  };

  const handleDisapprove = (id) => {
    console.log('Disapprove proposal:', id);
    // Add disapproval logic here
    handleCloseModal();
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      approved: { color: 'bg-green-100 text-green-800 border-green-200', text: 'Approved' },
      rejected: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Rejected' }
    };
    
    const config = statusConfig[status] || statusConfig.approved;
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || proposal.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto ml-64">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Proposals Management</h1>
              <p className="text-gray-600">Review and manage submitted proposals</p>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search proposals by title, submitter, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Status Filter */}
                <div className="flex items-center space-x-2">
                  <FaFilter className="text-gray-400 w-4 h-4" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaFileAlt className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Total Proposals</p>
                    <p className="text-xl font-bold text-gray-800">{proposals.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Approved</p>
                    <p className="text-xl font-bold text-gray-800">{proposals.filter(p => p.status === 'approved').length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FaTimes className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Rejected</p>
                    <p className="text-xl font-bold text-gray-800">{proposals.filter(p => p.status === 'rejected').length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposals List */}
            <div className="space-y-4">
              {filteredProposals.map((proposal) => (
                <div key={proposal.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      {/* Left Section */}
                      <div className="flex-1 mb-4 lg:mb-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-800">{proposal.title}</h3>
                          {getStatusBadge(proposal.status)}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <FaUser className="w-3 h-3" />
                            <span>{proposal.submittedBy}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendar className="w-3 h-3" />
                            <span>{proposal.dateSubmitted}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Category:</span>
                            <span className="ml-2 font-medium text-gray-800">{proposal.category}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Budget:</span>
                            <span className="ml-2 font-medium text-gray-800">{proposal.budget}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Duration:</span>
                            <span className="ml-2 font-medium text-gray-800">{proposal.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                        <button
                          onClick={() => handleViewDetails(proposal)}
                          className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center space-x-2 text-sm font-medium"
                        >
                          <FaEye className="w-3 h-3" />
                          <span>View Details</span>
                        </button>
                        <button
                          onClick={() => handleApprove(proposal.id)}
                          className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors flex items-center space-x-2 text-sm font-medium"
                        >
                          <FaCheck className="w-3 h-3" />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleDisapprove(proposal.id)}
                          className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors flex items-center space-x-2 text-sm font-medium"
                        >
                          <FaTimes className="w-3 h-3" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProposals.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {searchTerm || statusFilter !== 'all' ? 'No Matching Proposals' : 'No Proposals Found'}
                </h3>
                <p className="text-gray-500">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.' 
                    : 'There are currently no proposals to review.'}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modal */}
      <ProposalDetails
        proposal={selectedProposal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApprove={handleApprove}
        onDisapprove={handleDisapprove}
      />
    </div>
  );
};

export default Proposals;