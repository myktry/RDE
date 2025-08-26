import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

export default function Projects() {
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState('projects');

  // Research projects data for the table
  const researchProjects = [
    {
      id: 1,
      title: "Impact of Climate Change on Agricultural Productivity in Mindanao",
      proposalId: "RP-2024-001",
      author: "Dr. Maria Santos",
      college: "College of Agriculture",
      status: "Ongoing",
      progress: 75,
      funding: "₱2,500,000",
      priority: "High",
      dateSubmitted: "2024-01-15"
    },
    {
      id: 2,
      title: "Development of Renewable Energy Solutions for Rural Communities",
      proposalId: "RP-2024-002",
      author: "Prof. Juan Dela Cruz",
      college: "College of Engineering",
      status: "Completed",
      progress: 100,
      funding: "₱1,800,000",
      priority: "Medium",
      dateSubmitted: "2023-11-20"
    },
    {
      id: 3,
      title: "Digital Literacy Enhancement Program for Senior Citizens",
      proposalId: "RP-2024-003",
      author: "Dr. Ana Rodriguez",
      college: "College of Education",
      status: "Ongoing",
      progress: 45,
      funding: "₱950,000",
      priority: "Low",
      dateSubmitted: "2024-02-10"
    },
    {
      id: 4,
      title: "Mental Health Awareness and Support Systems in University Settings",
      proposalId: "RP-2024-004",
      author: "Prof. Carlos Mendoza",
      college: "College of Psychology",
      status: "Planning",
      progress: 20,
      funding: "₱1,200,000",
      priority: "High",
      dateSubmitted: "2024-03-05"
    },
    {
      id: 5,
      title: "Sustainable Waste Management Practices in Educational Institutions",
      proposalId: "RP-2024-005",
      author: "Dr. Elena Fernandez",
      college: "College of Environmental Science",
      status: "Ongoing",
      progress: 60,
      funding: "₱1,500,000",
      priority: "Medium",
      dateSubmitted: "2024-01-30"
    }
  ];

  // Filter and sort research projects
  const filteredAndSortedProjects = researchProjects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.college.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = status === '' || project.status === status;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'dateSubmitted') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentPage('projectDetails');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentPage('projects');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Show project details if a project is selected
  if (currentPage === 'projectDetails' && selectedProject) {
    return (
      <ProjectDetails 
        project={selectedProject}
        onBack={handleBackToProjects}
        onPageChange={handlePageChange}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">Manage and track ongoing university initiatives and developments</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
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
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Ongoing</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Funding</p>
              <p className="text-2xl font-bold text-gray-900">₱8.0M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Project Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Research Projects</h2>
              <p className="text-gray-600 mt-1">Comprehensive list of all research initiatives</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-500">Sort by:</div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="status">Status</option>
                <option value="dateSubmitted">Date</option>
                <option value="progress">Progress</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className={`w-4 h-4 text-gray-600 transform transition-transform duration-200 ${sortOrder === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {filteredAndSortedProjects.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Project Details</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Author & College</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status & Progress</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Funding</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAndSortedProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-1">ID: {project.proposalId}</p>
                        <p className="text-xs text-gray-500">Submitted: {new Date(project.dateSubmitted).toLocaleDateString()}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{project.author}</p>
                        <p className="text-xs text-gray-500 mt-1">{project.college}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'Ongoing' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              project.progress === 100 ? 'bg-green-500' :
                              project.progress >= 50 ? 'bg-orange-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{project.progress}% complete</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm font-semibold text-gray-900">{project.funding}</div>
                      <div className={`text-xs mt-1 ${
                        project.priority === 'High' ? 'text-red-600' :
                        project.priority === 'Medium' ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {project.priority} Priority
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="inline-flex items-center px-4 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500 mb-6">No projects match your current filters. Try adjusting your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setStatus('');
                }}
                className="inline-flex items-center px-4 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 transition-colors duration-200"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


