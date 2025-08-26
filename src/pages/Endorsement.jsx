import React, { useState } from 'react';
import ProposalDetails from './ProposalDetails';

export default function Endorsement() {
  const [selectedEndorsement, setSelectedEndorsement] = useState(null);
  const [currentPage, setCurrentPage] = useState('endorsements');

  const endorsements = [
    {
      id: 1,
      title: "Faculty Promotion Request",
      requester: "Dr. Maria Santos",
      department: "College of Engineering",
      type: "Promotion",
      status: "Pending Review",
      priority: "High",
      submittedDate: "2024-10-15",
      deadline: "2024-10-30",
      description: "Request for promotion from Assistant Professor to Associate Professor based on research achievements and teaching excellence."
    },
    {
      id: 2,
      title: "Research Grant Application",
      requester: "Prof. Juan Dela Cruz",
      department: "College of Science",
      type: "Research Grant",
      status: "Approved",
      priority: "Medium",
      submittedDate: "2024-10-10",
      deadline: "2024-10-25",
      description: "Application for research grant on renewable energy technologies for rural communities."
    },
    {
      id: 3,
      title: "Student Organization Recognition",
      requester: "Student Council",
      department: "Student Affairs",
      type: "Recognition",
      status: "Under Review",
      priority: "Low",
      submittedDate: "2024-10-12",
      deadline: "2024-11-15",
      description: "Request for official recognition of the Environmental Science Student Association."
    },
    {
      id: 4,
      title: "Equipment Purchase Request",
      requester: "Engr. Ana Rodriguez",
      department: "College of Technology",
      type: "Purchase",
      status: "Rejected",
      priority: "Medium",
      submittedDate: "2024-10-08",
      deadline: "2024-10-20",
      description: "Request for purchase of advanced laboratory equipment for the Electronics Engineering program."
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800 border-green-200'
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200'
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Under Review': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'Low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Promotion': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Research Grant': return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      case 'Recognition': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Purchase': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const handleEndorsementClick = (endorsement) => {
    setSelectedEndorsement(endorsement);
    setCurrentPage('proposalDetails');
  };

  const handleBackToEndorsements = () => {
    setSelectedEndorsement(null);
    setCurrentPage('endorsements');
  };

  if (currentPage === 'proposalDetails' && selectedEndorsement) {
    return (
      <ProposalDetails 
        proposal={selectedEndorsement}
        onBack={handleBackToEndorsements}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Endorsements</h1>
          <p className="text-gray-600">Review and manage endorsement requests from faculty and staff</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm">
            <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Rejected</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>
      </div>

             {/* Endorsements List */}
       <div className="space-y-4">
         {endorsements.map((endorsement) => (
           <div 
             key={endorsement.id} 
             className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 cursor-pointer"
             onClick={() => handleEndorsementClick(endorsement)}
           >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{endorsement.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(endorsement.status)}`}>
                    {endorsement.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(endorsement.priority)}`}>
                    {endorsement.priority}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{endorsement.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span><strong>Requester:</strong> {endorsement.requester}</span>
                  <span><strong>Department:</strong> {endorsement.department}</span>
                  <span><strong>Submitted:</strong> {endorsement.submittedDate}</span>
                </div>
              </div>
                             <div className="flex flex-col items-end gap-2">
                 <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(endorsement.type)}`}>
                   {endorsement.type}
                 </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}





