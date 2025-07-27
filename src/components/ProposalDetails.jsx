import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaUser, FaCalendar, FaFileAlt, FaCheck, FaTimes as FaX, FaEye } from 'react-icons/fa';

const ProposalDetails = ({ proposal, isOpen, onClose, onApprove, onDisapprove }) => {
  const navigate = useNavigate();

  if (!isOpen || !proposal) return null;

  const handleViewProposal = () => {
    onClose(); // Close the modal first
    navigate(`/proposal/${proposal.id}`); // Navigate to the proposal viewer
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Proposal Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <FaFileAlt className="text-red-600 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-600">Proposal Title</p>
                  <p className="font-medium text-gray-800">{proposal.title}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaUser className="text-red-600 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-600">Submitted By</p>
                  <p className="font-medium text-gray-800">{proposal.submittedBy}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaCalendar className="text-red-600 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-600">Date Submitted</p>
                  <p className="font-medium text-gray-800">{proposal.dateSubmitted}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">P</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-medium text-gray-800">Pending Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Description</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                This proposal outlines the implementation of renewable energy solutions across the university campus. 
                The project aims to reduce carbon footprint and energy costs while serving as a model for sustainable 
                practices in educational institutions.
              </p>
            </div>
          </div>

          {/* Project Objectives */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Objectives</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Install solar panels on campus buildings</li>
                <li>Implement energy-efficient lighting systems</li>
                <li>Establish a renewable energy research center</li>
                <li>Reduce campus energy consumption by 30%</li>
                <li>Create educational programs on renewable energy</li>
              </ul>
            </div>
          </div>

          {/* Budget Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Budget Information</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total Budget</p>
                  <p className="font-bold text-lg text-gray-800">₱2,500,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-bold text-gray-800">18 months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected ROI</p>
                  <p className="font-bold text-green-600">25% annually</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Timeline</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Phase 1: Planning & Design</span>
                  <span className="text-sm text-gray-600">Months 1-3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Phase 2: Installation</span>
                  <span className="text-sm text-gray-600">Months 4-12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Phase 3: Testing & Commissioning</span>
                  <span className="text-sm text-gray-600">Months 13-15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Phase 4: Training & Handover</span>
                  <span className="text-sm text-gray-600">Months 16-18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Documents */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Supporting Documents</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-3">
                    <FaFileAlt className="text-red-600 w-4 h-4" />
                    <span className="text-gray-700">Technical Specifications.pdf</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-3">
                    <FaFileAlt className="text-red-600 w-4 h-4" />
                    <span className="text-gray-700">Budget Breakdown.xlsx</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-3">
                    <FaFileAlt className="text-red-600 w-4 h-4" />
                    <span className="text-gray-700">Environmental Impact Assessment.pdf</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Action Buttons */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleViewProposal}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FaEye className="w-4 h-4" />
            <span>View Proposal</span>
          </button>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onDisapprove(proposal.id)}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <FaX className="w-4 h-4" />
              <span>Disapprove</span>
            </button>
            <button
              onClick={() => onApprove(proposal.id)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
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