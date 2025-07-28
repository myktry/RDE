import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import PDFViewer from '../components/PDFViewer';
import { FaArrowLeft, FaFileAlt } from 'react-icons/fa';

const ProposalViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDocument, setSelectedDocument] = useState('Research Proposal Form');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 11;

  // Sample proposal data
  const proposal = {
    id: 'PRO-2025-00001',
    title: 'Renewable Energy Implementation',
    author: 'Kyla Bea Dorin',
    department: 'College of Information and Computing',
    documents: [
      {
        name: 'Research Proposal Form',
        type: 'pdf',
        url: '/Balbuena_Concept+Paper.pdf', // This will be served from the public folder
        localPath: 'C:\\Users\\Troy\\Downloads\\Balbuena_Concept+Paper.pdf'
      },
      {
        name: 'Endorsement Letter',
        type: 'pdf',
        url: null
      },
      {
        name: 'Special Order',
        type: 'pdf',
        url: null
      },
      {
        name: 'Seti Scorecard',
        type: 'pdf',
        url: null
      },
      {
        name: 'Ethics Certificate',
        type: 'pdf',
        url: null
      },
      {
        name: 'GAD Certificate',
        type: 'pdf',
        url: null
      }
    ]
  };

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document.name);
    setCurrentPage(1); // Reset to first page when switching documents
  };

  const getSelectedDocumentData = () => {
    return proposal.documents.find(doc => doc.name === selectedDocument);
  };

  const selectedDocData = getSelectedDocumentData();

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
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <div className="mb-6">
              <button
                onClick={() => navigate('/proposals')}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Back to Proposals</span>
              </button>
            </div>

            {/* Proposal Header */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {proposal.title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Proposal ID:</span>
                  <span className="ml-2 text-gray-600">{proposal.id}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Author:</span>
                  <span className="ml-2 text-gray-600">{proposal.author}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Department:</span>
                  <span className="ml-2 text-gray-600">{proposal.department}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Document Navigation */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Submitted Documents:
                  </h3>
                  <div className="space-y-2">
                    {proposal.documents.map((document, index) => (
                      <button
                        key={index}
                        onClick={() => handleDocumentSelect(document)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedDocument === document.name
                            ? 'bg-red-100 text-red-800 border-l-4 border-red-600'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <FaFileAlt className="w-4 h-4" />
                          <span className="text-sm">{document.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Document Viewer */}
              <div className="lg:col-span-3">
                <PDFViewer 
                  pdfUrl={selectedDocData?.url} 
                  title={selectedDocument}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProposalViewer; 