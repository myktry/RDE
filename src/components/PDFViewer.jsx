import React, { useState } from 'react';
import { FaDownload, FaExpand, FaFilePdf } from 'react-icons/fa';

const PDFViewer = ({ pdfUrl, title }) => {
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = title || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const toggleFullscreen = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  const handlePdfLoad = () => {
    setPdfError(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Viewer Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Open in New Tab"
          >
            <FaExpand className="w-4 h-4" />
          </button>
          <button 
            onClick={handleDownload}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Download"
          >
            <FaDownload className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="bg-gray-50 p-2">
        <div className="bg-white border border-gray-200 rounded overflow-hidden">
          {pdfUrl && !pdfError ? (
            <div className="relative h-[600px]">
              <object
                data={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                type="application/pdf"
                className="w-full h-full border-0"
                onLoad={handlePdfLoad}
                onError={handlePdfError}
              >
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <FaFilePdf className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-base font-medium">PDF viewer not supported</p>
                    <p className="text-sm mb-3">Your browser doesn't support PDF viewing</p>
                    <button
                      onClick={() => window.open(pdfUrl, '_blank')}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Open in New Tab
                    </button>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[300px] text-gray-500">
              <div className="text-center">
                <FaFilePdf className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-base font-medium">
                  {pdfError ? 'PDF could not be loaded' : 'PDF not available'}
                </p>
                <p className="text-sm mb-3">
                  {pdfError 
                    ? 'There was an error loading the PDF file.' 
                    : 'Please check the file path or upload a PDF'
                  }
                </p>
                {pdfUrl && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Attempted to load: {pdfUrl}</p>
                    <button
                      onClick={() => window.open(pdfUrl, '_blank')}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Open in New Tab
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer; 