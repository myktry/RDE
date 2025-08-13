import React, { useState, useCallback } from 'react';
import Layout from '../components/Layout';
import PDFViewer from '../components/PDFViewer';
import { Eye, Maximize2, ArrowLeft, Minus, Plus, ExternalLink, RotateCcw, PenTool, Undo, Redo, Download, Printer, MoreVertical, X } from 'lucide-react';

const DocumentCard = ({ document, onView }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-600 hover:shadow-lg flex flex-col h-full">
    <div className="p-6 flex-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-14 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:from-red-100 group-hover:to-red-200">
          <svg 
            className="w-6 h-6 text-red-600"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {document.type}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">{document.size}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-red-600 transition-colors">
            {document.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {document.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Uploaded {document.uploadDate}</span>
            <span>•</span>
            <span>{document.downloads} downloads</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="p-4 bg-gray-50 border-t border-gray-200">
      <button
        onClick={() => onView(document)}
        className="w-full bg-red-600 text-white border-none py-3 px-5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-red-700 flex items-center justify-center gap-2"
      >
        <Eye className="w-4 h-4" />
        View Document
      </button>
    </div>
  </div>
);

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documents = [
    {
      id: 1,
      title: 'Balbuena_Concept Paper',
      description: 'Research concept paper on sustainable agriculture practices in the Philippines.',
      type: 'PDF',
      size: '11 MB',
      uploadDate: '2 days ago',
      downloads: 45,
      pdfPath: '/Balbuena_Concept Paper.pdf',
      fileName: 'Balbuena_Concept Paper.pdf'
    },
    {
      id: 2,
      title: 'Research Methodology Guidelines',
      description: 'Comprehensive guide for conducting research studies at USeP.',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '1 week ago',
      downloads: 128,
      pdfPath: '/research-methodology.pdf',
      fileName: 'research-methodology.pdf'
    },
    {
      id: 3,
      title: 'Data Collection Templates',
      description: 'Standardized templates for data collection in research projects.',
      type: 'DOCX',
      size: '856 KB',
      uploadDate: '3 days ago',
      downloads: 67,
      pdfPath: '/data-templates.pdf',
      fileName: 'data-templates.pdf'
    },
    {
      id: 4,
      title: 'Statistical Analysis Handbook',
      description: 'Guide for statistical analysis methods commonly used in research.',
      type: 'PDF',
      size: '3.2 MB',
      uploadDate: '2 weeks ago',
      downloads: 89,
      pdfPath: '/statistical-analysis.pdf',
      fileName: 'statistical-analysis.pdf'
    },
    {
      id: 5,
      title: 'Research Ethics Guidelines',
      description: 'Ethical guidelines and principles for conducting research at USeP.',
      type: 'PDF',
      size: '1.5 MB',
      uploadDate: '1 month ago',
      downloads: 156,
      pdfPath: '/ethics-guidelines.pdf',
      fileName: 'ethics-guidelines.pdf'
    },
    {
      id: 6,
      title: 'Publication Standards',
      description: 'Standards and requirements for publishing research papers.',
      type: 'PDF',
      size: '2.1 MB',
      uploadDate: '2 weeks ago',
      downloads: 73,
      pdfPath: '/publication-standards.pdf',
      fileName: 'publication-standards.pdf'
    }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDocument = useCallback((document) => {
    setSelectedDocument(document);
    setShowPDFViewer(true);
  }, []);

  const handleBackToList = useCallback(() => {
    setShowPDFViewer(false);
    setSelectedDocument(null);
  }, []);

  if (showPDFViewer && selectedDocument) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={handleBackToList}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </button>
            <button
              onClick={handleBackToList}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <PDFViewer 
            pdfPath={selectedDocument.pdfPath} 
            title={selectedDocument.title}
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resources</h1>
          <p className="text-gray-600">Access research documents, guidelines, and templates</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center relative">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/2 mx-auto pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm transition-all focus:outline-none focus:border-red-500 bg-white"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="mb-6">
          {searchTerm ? (
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-red-400">{filteredDocuments.length}</span> document{filteredDocuments.length !== 1 ? 's' : ''} found
              {' '}matching <span className="font-semibold text-red-400">"{searchTerm}"</span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              {documents.length} documents available
            </p>
          )}
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-red-400 bg-transparent border-none font-medium cursor-pointer transition-colors hover:text-red-300"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((document) => (
              <DocumentCard
                key={document.id}
                document={document}
                onView={handleViewDocument}
              />
            ))}
          </div>
        )}

        {filteredDocuments.length > 0 && (
          <div className="mt-8 text-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-4">Need more resources?</p>
            <button
              className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto"
            >
              Upload New Document
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ResourcesPage; 