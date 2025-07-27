import React, { useState } from 'react';
import { FaDownload, FaEye, FaExpand, FaCompress, FaFilePdf } from 'react-icons/fa';

const PDFViewer = ({ pdfUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
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
    setIsFullscreen(!isFullscreen);
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  const handlePdfLoad = () => {
    setPdfError(false);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Viewer Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <FaCompress className="w-4 h-4" /> : <FaExpand className="w-4 h-4" />}
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
      <div className="bg-gray-50 p-4 min-h-[800px]">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {pdfUrl && !pdfError ? (
            <iframe
              src={pdfUrl}
              className="w-full h-[800px] border-0"
              title={title}
              onLoad={handlePdfLoad}
              onError={handlePdfError}
            />
          ) : (
            <div className="flex items-center justify-center h-[800px] text-gray-500">
              <div className="text-center">
                <FaFilePdf className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">
                  {pdfError ? 'PDF could not be loaded' : 'PDF not available'}
                </p>
                <p className="text-sm mb-4">
                  {pdfError 
                    ? 'There was an error loading the PDF file.' 
                    : 'Please check the file path or upload a PDF'
                  }
                </p>
                {pdfUrl && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">Attempted to load: {pdfUrl}</p>
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