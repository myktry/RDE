import React, { useState, useMemo } from 'react';
import StatsCard from '../components/StatsCard';
import FilterBar from '../components/FilterBar';
import ProjectTable from '../components/ProjectTable';
import ProjectDetails from '../components/ProjectDetails';

const TrackerPage = ({ onPageChange }) => {
  const [fromYear, setFromYear] = useState('2025');
  const [toYear, setToYear] = useState('2025');
  const [status, setStatus] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');

  // Enhanced sample project data
  const projects = [
    {
      id: 1,
      title: 'ARAY KO: Identifying pain through eye contact',
      author: 'Dr. Nico Eslawan',
      status: 'Completed',
      proposalId: 'PRO-2025-00025',
      college: 'College of Engineering',
      dateSubmitted: '2025-01-15',
      progress: 100,
      priority: 'High',
      funding: '₱500,000'
    },
    {
      id: 2,
      title: 'Digital Transformation in Local Government Units',
      author: 'Prof. Maria Santos',
      status: 'Completed',
      proposalId: 'PRO-2025-00026',
      college: 'College of Business',
      dateSubmitted: '2025-02-10',
      progress: 100,
      priority: 'Medium',
      funding: '₱750,000'
    },
    {
      id: 3,
      title: 'Sustainable Agriculture Practices in Rural Communities',
      author: 'Dr. Juan Dela Cruz',
      status: 'Ongoing',
      proposalId: 'PRO-2025-00027',
      college: 'College of Agriculture',
      dateSubmitted: '2025-03-05',
      progress: 65,
      priority: 'High',
      funding: '₱1,200,000'
    },
    {
      id: 4,
      title: 'Community Health Initiatives and Wellness Programs',
      author: 'Dr. Ana Rodriguez',
      status: 'Ongoing',
      proposalId: 'PRO-2025-00028',
      college: 'College of Medicine',
      dateSubmitted: '2025-03-20',
      progress: 45,
      priority: 'Medium',
      funding: '₱900,000'
    },
    {
      id: 5,
      title: 'AI-Powered Educational Assessment Tools',
      author: 'Prof. Michael Chen',
      status: 'Under Review',
      proposalId: 'PRO-2025-00029',
      college: 'College of Computer Science',
      dateSubmitted: '2025-04-02',
      progress: 20,
      priority: 'High',
      funding: '₱600,000'
    },
    {
      id: 6,
      title: 'Marine Biodiversity Conservation Project',
      author: 'Dr. Sarah Johnson',
      status: 'Ongoing',
      proposalId: 'PRO-2025-00030',
      college: 'College of Marine Sciences',
      dateSubmitted: '2025-04-15',
      progress: 30,
      priority: 'High',
      funding: '₱2,100,000'
    }
  ];

  // Calculate statistics
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === 'Completed').length;
    const ongoingProjects = projects.filter(p => p.status === 'Ongoing').length;
    const underReviewProjects = projects.filter(p => p.status === 'Under Review').length;
    const totalFunding = projects.reduce((sum, p) => sum + parseFloat(p.funding.replace('₱', '').replace(',', '')), 0);
    
    return {
      total: totalProjects,
      completed: completedProjects,
      ongoing: ongoingProjects,
      underReview: underReviewProjects,
      totalFunding: `₱${totalFunding.toLocaleString()}`
    };
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by status
    if (status) {
      filtered = filtered.filter(project => project.status === status);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.proposalId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.college.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'author':
          aValue = a.author.toLowerCase();
          bValue = b.author.toLowerCase();
          break;
        case 'status':
          aValue = a.status.toLowerCase();
          bValue = b.status.toLowerCase();
          break;
        case 'dateSubmitted':
          aValue = new Date(a.dateSubmitted);
          bValue = new Date(b.dateSubmitted);
          break;
        case 'progress':
          aValue = a.progress;
          bValue = b.progress;
          break;
        case 'funding':
          aValue = parseFloat(a.funding.replace('₱', '').replace(',', ''));
          bValue = parseFloat(b.funding.replace('₱', '').replace(',', ''));
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [projects, status, searchTerm, sortBy, sortOrder]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // If a project is selected, show the details page
  if (selectedProject) {
    return <ProjectDetails project={selectedProject} onBack={handleBack} onPageChange={onPageChange} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Research Project Tracker
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Monitor and manage all research projects with comprehensive tracking and analytics
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Total Projects</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                <p className="text-sm text-green-600 font-medium mt-1">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Active portfolio
                  </span>
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Completed</p>
                <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
                <p className="text-sm text-gray-500 font-medium mt-1">
                  {Math.round((stats.completed / stats.total) * 100)}% completion rate
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Ongoing</p>
                <p className="text-3xl font-bold text-orange-600">{stats.ongoing}</p>
                <p className="text-sm text-orange-600 font-medium mt-1">
                  <span className="inline-flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-1 animate-pulse"></div>
                    In progress
                  </span>
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Total Funding</p>
                <p className="text-2xl font-bold text-purple-600">₱{stats.totalFunding}</p>
                <p className="text-sm text-purple-600 font-medium mt-1">
                  Research investment
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filter and Search Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Filters & Search</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* From Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Year</label>
              <select 
                value={fromYear} 
                onChange={(e) => setFromYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>

            {/* To Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Year</label>
              <select 
                value={toYear} 
                onChange={(e) => setToYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
              <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
              >
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Under Review">Under Review</option>
              </select>
            </div>

            {/* Search Projects */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Projects</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, author, ID, or college..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredAndSortedProjects.length}</span> of <span className="font-semibold text-gray-900">{stats.total}</span> projects
              {searchTerm && (
                <>
                  {' '}matching "<span className="font-medium text-red-600">{searchTerm}</span>"
                </>
              )}
            </div>
            
            {(searchTerm || status) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setStatus('');
                }}
                className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
              >
                Clear filters
              </button>
            )}
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
    </div>
  );
};

export default TrackerPage;