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
                <div className="flex items-center space-x-3">
                  <FaCalendar className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Date Submitted</p>
                    <p className="font-semibold text-gray-800">{proposal.dateSubmitted}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaTag className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Research Center</p>
                    <p className="font-semibold text-gray-800">Academic Affairs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMoneyBillWave className="text-red-600 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Budget</p>
                    <p className="font-semibold text-gray-800">₱25,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Information Section */}
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Research Information
                </h3>
                <p className="text-gray-600 mt-1">Comprehensive research project details and classifications</p>
              </div>
            </div>

            {/* Research Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Research Description</h4>
              </div>
              <div className="p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-xl border border-yellow-200/50">
                <p className="text-gray-700 leading-relaxed">
                  This proposal outlines the implementation of renewable energy solutions across the university campus. 
                  The project aims to reduce carbon footprint and energy costs while serving as a model for sustainable 
                  practices in educational institutions. The initiative will include solar panel installation, 
                  energy-efficient lighting systems, and educational programs to promote environmental awareness.
                </p>
              </div>
            </div>

            {/* Research Objectives */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Research Objectives</h4>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl border border-blue-200/50">
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

            {/* Research Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* DOST Programs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">DOST Programs</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                    Product
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300/50 shadow-sm hover:shadow-md transition-all duration-200">
                    Patent
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300/50 shadow-sm hover:shadow-md transition-all duration-200">
                    Publication
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300/50 shadow-sm hover:shadow-md transition-all duration-200">
                    People Services
                  </span>
                </div>
              </div>

              {/* Research Agenda */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Research Agenda</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300/50 shadow-sm hover:shadow-md transition-all duration-200">
                    Environment and Natural Resources
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300/50 shadow-sm hover:shadow-md transition-all duration-200">
                    Engineering and Technology
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300/50 shadow-sm hover:shadow-md transition-all duration-200">
                    Social Sciences and Education
                  </span>
                </div>
              </div>

              {/* SDGs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Sustainable Development Goals</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Clean Water and Sanitation
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Decent Work and Economic Growth
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Reduced Inequalities
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Responsible Consumption and Production
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Affordable and Clean Energy
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Gender Equality
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Industry, Innovation and Infrastructure
                  </span>
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