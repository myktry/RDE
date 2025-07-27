import React, { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import ProposalDetails from '../components/ProposalDetails';
import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';

const Proposals = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample proposal data
  const proposals = [
    {
      id: 1,
      title: "Renewable Energy Implementation",
      submittedBy: "Kyla Bea Dorin",
      dateSubmitted: "July 11, 2025",
      status: "pending"
    },
    {
      id: 2,
      title: "Renewable Energy Implementation",
      submittedBy: "Kyla Bea Dorin",
      dateSubmitted: "July 11, 2025",
      status: "pending"
    },
    {
      id: 3,
      title: "Renewable Energy Implementation",
      submittedBy: "Kyla Bea Dorin",
      dateSubmitted: "July 11, 2025",
      status: "pending"
    },
    {
      id: 4,
      title: "Renewable Energy Implementation",
      submittedBy: "Kyla Bea Dorin",
      dateSubmitted: "July 11, 2025",
      status: "pending"
    },
    {
      id: 5,
      title: "Renewable Energy Implementation",
      submittedBy: "Kyla Bea Dorin",
      dateSubmitted: "July 11, 2025",
      status: "pending"
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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-auto ml-64">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">List of Proposals</h1>
            
            {/* Proposals List */}
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div key={proposal.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex justify-between items-start">
                    {/* Proposal Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {proposal.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Submitted by: {proposal.submittedBy}
                      </p>
                      <p className="text-sm text-gray-600">
                        Date Submitted: {proposal.dateSubmitted}
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => handleViewDetails(proposal)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2 text-sm"
                      >
                        <FaEye className="w-3 h-3" />
                        <span>View Details</span>
                      </button>
                      <button
                        onClick={() => handleApprove(proposal.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 text-sm"
                      >
                        <FaCheck className="w-3 h-3" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleDisapprove(proposal.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm"
                      >
                        <FaTimes className="w-3 h-3" />
                        <span>Disapprove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Empty State (if no proposals) */}
            {proposals.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Proposals Found</h3>
                <p className="text-gray-500">There are currently no proposals to review.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Proposal Details Modal */}
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