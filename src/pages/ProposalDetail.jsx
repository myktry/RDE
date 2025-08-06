import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const ProposalDetail = () => {
  const { id } = useParams();

  // Timeline stages data
  const timelineStages = [
    { id: 1, name: 'Endorsement', status: 'completed' },
    { id: 2, name: 'R&D Division', status: 'completed' },
    { id: 3, name: 'Proposal Review', status: 'completed' },
    { id: 4, name: 'Ethics Review', status: 'current' },
    { id: 5, name: 'OVPRDE', status: 'pending' },
    { id: 6, name: 'President', status: 'pending' },
    { id: 7, name: 'Implementation', status: 'pending' },
    { id: 8, name: 'Monitoring', status: 'pending' },
    { id: 9, name: 'For Completion', status: 'pending' }
  ];

  // Status history data
  const statusHistory = [
    {
      date: 'July 14, 2025',
      status: 'College Endorsement',
      action: 'Proposal submitted for initial review and endorsement by the college committee.',
      priority: 'high'
    },
    {
      date: 'July 12, 2025',
      status: 'R&D Division Review',
      action: 'Proposal forwarded to R&D Division for technical assessment and evaluation.',
      priority: 'medium'
    },
    {
      date: 'July 10, 2025',
      status: 'Proposal Review',
      action: 'Initial proposal review completed with minor revisions requested.',
      priority: 'medium'
    },
    {
      date: 'July 8, 2025',
      status: 'Ethics Review',
      action: 'Currently under ethics committee review for compliance and safety assessment.',
      priority: 'high'
    }
  ];

  // Helper functions for styling
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-700';
      case 'current':
        return 'text-red-700';
      default:
        return 'text-gray-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <BiArrowBack className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Back to Research Projects</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Proposal ID: {id || 'PRO-2025-00022'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Proposal Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              ARAY KO: Identifying pain through eye contact
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">Proposal ID:</span> PRO-2025-00022
              </div>
              <div>
                <span className="font-medium">Author:</span> Nico Eslawan
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-red-100 rounded-xl mr-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Project Timeline</h2>
              <p className="text-gray-600">Track your project's progress through each stage</p>
            </div>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Scrollable Timeline Container */}
            <div className="overflow-x-auto pb-4">
              <div className="flex justify-between items-start relative min-w-max px-4">
                {timelineStages.map((stage, index) => (
                  <div key={stage.id} className="flex flex-col items-center relative mx-8">
                    {/* Stage Dot */}
                    <div className={`w-12 h-12 rounded-full ${getStatusColor(stage.status)} mb-4 relative z-10`}>
                      {stage.status === 'completed' && (
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-green-200">
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Connecting Line */}
                    {index < timelineStages.length - 1 && (
                      <div className="absolute top-3 left-full w-16 h-0.5 bg-gray-300 z-0">
                        <div 
                          className="h-full bg-green-500 transition-all duration-500"
                          style={{ 
                            width: stage.status === 'completed' ? '100%' : '0%'
                          }}
                        ></div>
                      </div>
                    )}
                    
                    {/* Stage Label */}
                    <div className={`px-4 py-2 rounded-lg text-center min-w-32 ${
                      stage.status === 'current' ? 'bg-red-50 border border-red-200' : 
                      stage.status === 'completed' ? 'bg-green-50 border border-green-200' : 
                      'bg-gray-50 border border-gray-200'
                    }`}>
                      <span className={`text-sm font-medium ${getStatusTextColor(stage.status)} leading-tight`}>
                        {stage.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status History Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 pb-6">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Status History</h2>
                <p className="text-gray-600">Detailed timeline of all project activities</p>
              </div>
            </div>
          </div>

          {/* Enhanced Status History Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-y border-gray-200">
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">
                    Date & Time
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">
                    Action Details
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                {statusHistory.map((entry, index) => (
                  <tr key={index} className={`hover:bg-gray-50 transition-colors duration-200 ${
                    index !== statusHistory.length - 1 ? 'border-b border-gray-100' : ''
                  }`}>
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{entry.date}</div>
                          <div className="text-xs text-gray-500">Recently updated</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          index === 0 ? 'bg-red-600 animate-pulse' : 'bg-green-500'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          index === 0 ? 'text-red-700' : 'text-gray-900'
                        }`}>
                          {entry.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {entry.action || 'No additional details'}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(entry.priority)}`}>
                        {entry.priority?.toUpperCase() || 'NORMAL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 University Of Southeastern Philippines. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail; 