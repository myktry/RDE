import React, { useState } from 'react';
import PDFViewer from './PDFViewer';

const ProposalDetails = ({ proposal, onBack }) => {
  const [showEndorsementForm, setShowEndorsementForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [signedSpecialOrder, setSignedSpecialOrder] = useState(null);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Path to PDF files in the public folder
  const conceptPaperPath = '/Balbuena_Concept+Paper.pdf';
  const applicationLetterPath = '/Sample Application Letter Format.pdf';

  // Attached documents with availability status - all will show as PDFs
  const attachedDocuments = [
    { name: 'Revised Proposal Form (Center Manager Level)', available: true, pdfPath: applicationLetterPath },
    { name: 'SETI Scorecard', available: false, pdfPath: applicationLetterPath },
    { name: 'GAD Checklist and Certificate', available: true, pdfPath: applicationLetterPath },
    { name: 'Matrix of Compliance (Central Manager Level)', available: false, pdfPath: applicationLetterPath },
    { name: 'Signed Endorsement Letter (Center Manager Level)', available: true, pdfPath: applicationLetterPath },
    { name: 'Drafted Special Order', available: false, pdfPath: applicationLetterPath },
    { name: 'Revised Proposal Form (R&D Level)', available: true, pdfPath: applicationLetterPath },
    { name: 'Matrix of Compliance (R&D/R&D Level)', available: true, pdfPath: applicationLetterPath },
    { name: 'Ethics Certificate (If Applicable)', available: false, pdfPath: applicationLetterPath },
    { name: 'Signed Endorsement Letter (R&D Level)', available: true, pdfPath: applicationLetterPath },
    { name: 'Signed Special Order (RDE Level)', available: false, pdfPath: applicationLetterPath }
  ];

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
    }
  };

  const handleEndorse = () => {
    setShowEndorsementForm(true);
  };

  const handleBackToDetails = () => {
    setShowEndorsementForm(false);
  };

  const handleSubmitEndorsement = () => {
    // Handle endorsement submission
    alert('Endorsement submitted successfully!');
    setShowEndorsementForm(false);
  };

  const handleDocumentClick = (document) => {
    if (document.available) {
      setSelectedDocument(document);
      setShowDocumentModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowDocumentModal(false);
    setSelectedDocument(null);
  };

  // Document Modal Component
  const DocumentModal = () => {
    if (!selectedDocument) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{selectedDocument.name}</h2>
            <button
              onClick={handleCloseModal}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content - All documents show as PDFs */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="h-full">
              <PDFViewer 
                pdfPath={selectedDocument.pdfPath || applicationLetterPath} 
                title={selectedDocument.name}
                isFullscreen={true}
              />
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 mt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (showEndorsementForm) {
    return (
      <div className="p-6 bg-gray-100 h-full overflow-y-auto">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={handleBackToDetails}
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>← Back to Proposal Details</span>
          </button>
        </div>

        {/* Endorsement Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            HaHaHa Katawa: Ananlyzing Smile Dynamics for Psychopath Detection Using CNN
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-sm font-medium text-gray-600">Proposal ID:</span>
              <span className="text-sm text-gray-900 ml-2">2005-00025</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Date of Endorsement:</span>
              <span className="text-sm text-gray-900 ml-2">February 24, 2005</span>
            </div>
          </div>

          {/* Attached Documents */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Attached Documents</h3>
            <ul className="space-y-2">
              {attachedDocuments.map((document, index) => (
                <li key={index} className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-3 ${document.available ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                  <button 
                    onClick={() => handleDocumentClick(document)}
                    disabled={!document.available}
                    className={`text-sm text-left ${document.available ? 'text-blue-600 hover:text-blue-800 underline cursor-pointer' : 'text-red-600 cursor-not-allowed'}`}
                  >
                    {document.name}
                  </button>
                  {!document.available && (
                    <span className="ml-2 text-xs text-red-500 font-medium">(Not Available)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Important Notice */}
          <div className="mb-6 p-4 bg-gray-50 border-l-4 border-blue-500">
            <h4 className="font-semibold text-gray-800 mb-2">Important Notice</h4>
            <p className="text-sm text-gray-700">
              Please submit the following documents to proceed with the endorsement process. 
              Fields marked with an asterisk (*) are mandatory and must be completed prior to submission.
            </p>
          </div>

          {/* File Upload Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Endorsement Letter *
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setSelectedFile)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-sm text-gray-500 mt-1">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Signed Special Order *
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setSignedSpecialOrder)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-sm text-gray-500 mt-1">
                {signedSpecialOrder ? signedSpecialOrder.name : 'No file chosen'}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button 
              onClick={handleSubmitEndorsement}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium"
            >
              Endorse
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 h-full overflow-y-auto">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Proposals</span>
        </button>
      </div>

      {/* Proposal Details Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
            HaHaHa Katawa: Analyzing Smile Dynamics for Psychopath Detection Using CNN
          </h1>
          <p className="text-gray-600 text-lg">Research Proposal Details</p>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Proposal ID</h3>
            </div>
            <p className="text-lg font-bold text-blue-600">2005-00025</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Endorsement Date</h3>
            </div>
            <p className="text-lg font-bold text-purple-600">February 24, 2025</p>
          </div>
        </div>

        {/* Attached Documents */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Attached Documents</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {attachedDocuments.map((document, index) => (
              <div 
                key={index} 
                className={`flex items-center p-4 rounded-lg border transition-all duration-200 cursor-pointer group ${
                  document.available 
                    ? 'bg-blue-50 hover:bg-blue-100 border-blue-200' 
                    : 'bg-red-50 hover:bg-red-100 border-red-200'
                }`}
                onClick={() => handleDocumentClick(document)}
              >
                <div className={`w-3 h-3 rounded-full mr-4 transition-colors ${
                  document.available 
                    ? 'bg-blue-500 group-hover:bg-blue-600' 
                    : 'bg-red-500 group-hover:bg-red-600'
                }`}></div>
                <span 
                  className={`font-medium text-sm flex-1 ${
                    document.available 
                      ? 'text-blue-700 hover:text-blue-800 group-hover:underline' 
                      : 'text-red-700 hover:text-red-800'
                  }`}
                >
                  {document.name}
                </span>
                {document.available ? (
                  <svg className="w-4 h-4 text-blue-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-red-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Endorse Button */}
        <div className="flex justify-end">
          <button 
            onClick={handleEndorse}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Endorse Proposal
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <PDFViewer pdfPath={conceptPaperPath} title="Balbuena_Concept+Paper.pdf" />

      {/* Document Modal */}
      {showDocumentModal && <DocumentModal />}
    </div>
  );
};

export default ProposalDetails; 