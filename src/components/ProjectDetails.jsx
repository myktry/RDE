import React from 'react';

const ProjectDetails = ({ project, onBack }) => {
  const timelineStages = [
    { id: 1, name: 'Submission', status: 'completed' },
    { id: 2, name: 'College Endorsement', status: 'completed' },
    { id: 3, name: 'R&D Division', status: 'completed' },
    { id: 4, name: 'Proposal Review', status: 'completed' },
    { id: 5, name: 'Revision Compliance', status: 'completed' },
    { id: 6, name: 'Ethics Review', status: 'completed' },
    { id: 7, name: 'CMREC', status: 'completed' },
    { id: 8, name: 'President', status: 'completed' },
    { id: 9, name: 'Implementation', status: 'completed' },
    { id: 10, name: 'Monitoring', status: 'completed' },
    { id: 11, name: 'For Completion', status: 'completed' }
  ];

  const statusHistory = [
    { date: 'July 26, 2025', status: 'Revision Compliance', action: 'Currently awaiting document revisions', priority: 'high' },
    { date: 'July 16, 2025', status: 'Proposal Review', action: 'Review completed with recommendations', priority: 'medium' },
    { date: 'July 14, 2025', status: 'R&D Division', action: 'Checking of Documents', priority: 'low' },
    { date: 'July 14, 2025', status: 'College Endorsement', action: 'Awaiting for College Endorsement to R&D Division', priority: 'low' },
    { date: 'July 14, 2025', status: 'Submission', action: 'Initial submission received', priority: 'low' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-red-600';
      case 'pending':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'current':
        return 'text-red-600';
      case 'pending':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCurrentStageIndex = () => {
    return timelineStages.findIndex(stage => stage.status === 'current');
  };

  const getCompletionPercentage = () => {
    const completedStages = timelineStages.filter(stage => stage.status === 'completed').length;
    const currentStage = timelineStages.find(stage => stage.status === 'current') ? 1 : 0;
    return Math.round(((completedStages + currentStage * 0.5) / timelineStages.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-xl transition-all duration-200 mb-6 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Projects</span>
          </button>

          {/* Project Title and Info */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">ID:</span>
                  <span className="ml-1">{project.proposalId}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">Author:</span>
                  <span className="ml-1">{project.author}</span>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 min-w-[280px]">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {getCompletionPercentage()}%
                </div>
                <div className="text-sm text-red-700 font-medium mb-3">Project Progress</div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getCompletionPercentage()}%` }}
                  ></div>
                </div>
                <div className="text-xs text-red-600 mt-2">
                  {timelineStages.filter(s => s.status === 'completed').length} of {timelineStages.length} stages completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
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

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-600 rounded-lg mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">View Documents</h3>
            </div>
            <p className="text-blue-700 text-sm mb-4">Access all project-related documents and files</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Browse Files →
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-600 rounded-lg mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-green-900">Contact Support</h3>
            </div>
            <p className="text-green-700 text-sm mb-4">Get help with your project submission</p>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm">
              Get Help →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-600 rounded-lg mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-900">Guidelines</h3>
            </div>
            <p className="text-purple-700 text-sm mb-4">Review submission guidelines and requirements</p>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              View Guide →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;