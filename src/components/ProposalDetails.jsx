import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaUser, FaCalendar, FaFileAlt, FaCheck, FaTimes as FaX, FaEye, FaDownload, FaTag, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const ProposalDetails = ({ proposal, isOpen, onClose, onApprove, onDisapprove }) => {
  const navigate = useNavigate();

  if (!isOpen || !proposal) return null;

  const handleViewProposal = () => {
    onClose(); // Close the modal first
    navigate(`/proposal/${proposal.id}`); // Navigate to the proposal viewer
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      approved: { color: 'bg-green-100 text-green-800 border-green-200', text: 'Approved' },
      rejected: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Rejected' }
    };
    
    const config = statusConfig[status] || statusConfig.approved;
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <FaFileAlt className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Proposal Details</h2>
              <p className="text-gray-600 text-sm">Review proposal information and make a decision</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaFileAlt className="w-5 h-5 text-red-600 mr-2" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Proposal Title</p>
                    <p className="font-semibold text-gray-800">{proposal.title}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUser className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Submitted By</p>
                    <p className="font-semibold text-gray-800">{proposal.submittedBy}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCalendar className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Date Submitted</p>
                    <p className="font-semibold text-gray-800">{proposal.dateSubmitted}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaTag className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Category</p>
                    <p className="font-semibold text-gray-800">{proposal.category || 'Infrastructure'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status */}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-red-200">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 font-medium">Status:</span>
                {getStatusBadge(proposal.status)}
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaFileAlt className="w-5 h-5 text-blue-600 mr-2" />
              Project Description
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                This proposal outlines the implementation of renewable energy solutions across the university campus. 
                The project aims to reduce carbon footprint and energy costs while serving as a model for sustainable 
                practices in educational institutions. The initiative will include solar panel installation, 
                energy-efficient lighting systems, and educational programs to promote environmental awareness.
              </p>
            </div>
          </div>

          {/* Project Objectives */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaCheck className="w-5 h-5 text-green-600 mr-2" />
              Project Objectives
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Install solar panels on campus buildings to generate renewable energy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement energy-efficient lighting systems throughout the campus</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Establish a renewable energy research center for academic purposes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduce campus energy consumption by 30% within 18 months</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create educational programs on renewable energy for students and staff</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Budget Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaMoneyBillWave className="w-5 h-5 text-green-600 mr-2" />
                Budget Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Total Budget:</span>
                  <span className="font-bold text-lg text-gray-800">{proposal.budget || '₱2,500,000'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Duration:</span>
                  <span className="font-bold text-gray-800">{proposal.duration || '18 months'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Expected ROI:</span>
                  <span className="font-bold text-green-600">25% annually</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Cost Savings:</span>
                  <span className="font-bold text-green-600">₱500,000/year</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaClock className="w-5 h-5 text-blue-600 mr-2" />
                Project Timeline
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-gray-700 font-medium">Phase 1: Planning & Design</span>
                  <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">Months 1-3</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-gray-700 font-medium">Phase 2: Installation</span>
                  <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">Months 4-12</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-gray-700 font-medium">Phase 3: Testing & Commissioning</span>
                  <span className="text-sm text-gray-600 bg-yellow-100 px-2 py-1 rounded">Months 13-15</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-gray-700 font-medium">Phase 4: Training & Handover</span>
                  <span className="text-sm text-gray-600 bg-purple-100 px-2 py-1 rounded">Months 16-18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaDownload className="w-5 h-5 text-purple-600 mr-2" />
              Supporting Documents
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-red-600 w-4 h-4" />
                  <span className="text-gray-700 font-medium">Technical Specifications.pdf</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:bg-blue-50 px-3 py-1 rounded transition-colors">
                  Download
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-red-600 w-4 h-4" />
                  <span className="text-gray-700 font-medium">Budget Breakdown.xlsx</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:bg-blue-50 px-3 py-1 rounded transition-colors">
                  Download
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-red-600 w-4 h-4" />
                  <span className="text-gray-700 font-medium">Environmental Impact Assessment.pdf</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:bg-blue-50 px-3 py-1 rounded transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Action Buttons */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <button
            onClick={handleViewProposal}
            className="px-6 py-2.5 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors flex items-center space-x-2 font-medium"
          >
            <FaEye className="w-4 h-4" />
            <span>View Full Proposal</span>
          </button>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Close
            </button>
            <button
              onClick={() => onDisapprove(proposal.id)}
              className="px-6 py-2.5 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors flex items-center space-x-2 font-medium"
            >
              <FaX className="w-4 h-4" />
              <span>Reject</span>
            </button>
            <button
              onClick={() => onApprove(proposal.id)}
              className="px-6 py-2.5 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors flex items-center space-x-2 font-medium"
            >
              <FaCheck className="w-4 h-4" />
              <span>Approve</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetails; 