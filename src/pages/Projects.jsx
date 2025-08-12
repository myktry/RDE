import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Search, Eye, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const navigate = useNavigate();

  // Sample project data
  const projects = [
    {
      id: 'PRO-2025-00029',
      title: 'AI-Powered Educational Assessment Tools',
      author: 'Prof. Michael Chen',
      researchCenter: 'College of Computer Science',
      status: 'Under Review',
      progress: 20,
      funding: 600000,
      priority: 'High Priority',
      submittedDate: '4/2/2025'
    },
    {
      id: 'PRO-2025-00025',
      title: 'ARAY KO: Identifying pain through eye contact',
      author: 'Dr. Nico Eslawan',
      researchCenter: 'College of Engineering',
      status: 'Completed',
      progress: 100,
      funding: 500000,
      priority: 'High Priority',
      submittedDate: '1/15/2025'
    },
    {
      id: 'PRO-2025-00028',
      title: 'Community Health Initiatives and Wellness Programs',
      author: 'Dr. Ana Rodriguez',
      researchCenter: 'College of Medicine',
      status: 'Ongoing',
      progress: 45,
      funding: 900000,
      priority: 'Medium Priority',
      submittedDate: '3/20/2025'
    },
    {
      id: 'PRO-2025-00026',
      title: 'Digital Transformation in Local Government Units',
      author: 'Prof. Maria Santos',
      researchCenter: 'College of Business',
      status: 'Completed',
      progress: 100,
      funding: 750000,
      priority: 'Medium Priority',
      submittedDate: '2/10/2025'
    },
    {
      id: 'PRO-2025-00030',
      title: 'Marine Biodiversity Conservation Project',
      author: 'Dr. Sarah Johnson',
      researchCenter: 'College of Marine Sciences',
      status: 'Ongoing',
      progress: 30,
      funding: 1200000,
      priority: 'High Priority',
      submittedDate: '4/15/2025'
    }
  ];

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.researchCenter.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        return a.author.localeCompare(b.author);
      case 'status':
        return a.status.localeCompare(b.status);
      case 'funding':
        return b.funding - a.funding;
      case 'date':
        return new Date(b.submittedDate) - new Date(a.submittedDate);
      default:
        return 0;
    }
  });

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-red-500';
      case 'Completed':
        return 'bg-green-500';
      case 'Ongoing':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Get progress bar color
  const getProgressColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-red-500';
      case 'Completed':
        return 'bg-green-500';
      case 'Ongoing':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Handle view details click
  const handleViewDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Research Projects</h1>
              <p className="text-gray-600">Comprehensive list of all research initiatives</p>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="status">Status</option>
                <option value="funding">Funding</option>
                <option value="date">Date</option>
              </select>
              <ChevronUp size={16} className="text-gray-500" />
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author & Research Center
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status & Progress
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Funding
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-500">ID: {project.id}</p>
                        <p className="text-xs text-gray-500">Submitted: {project.submittedDate}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{project.author}</p>
                        <p className="text-xs text-gray-500">{project.researchCenter}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(project.status)}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">{project.progress}% complete</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {formatCurrency(project.funding)}
                        </p>
                        <p className="text-xs text-gray-500">{project.priority}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleViewDetails(project.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Eye size={16} />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
