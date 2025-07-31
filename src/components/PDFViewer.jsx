import React, { useState } from 'react';
import { FaDownload, FaEye, FaExpand, FaCompress, FaFilePdf } from 'react-icons/fa';

const PDFViewer = ({ pdfPath, title = 'Document' }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    if (pdfPath) {
      const link = document.createElement('a');
      link.href = pdfPath;
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
    setIsLoading(false);
  };

  const handlePdfLoad = () => {
    setPdfError(false);
    setIsLoading(false);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
    >
      {/* Header Bar */}
      <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="text-base md:text-lg font-semibold truncate">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.open(pdfPath, '_blank')}
            title="Open in new tab"
            className="p-2 hover:bg-gray-700 rounded transition"
          >
            <FaEye className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            className="p-2 hover:bg-gray-700 rounded transition"
          >
            {isFullscreen ? <FaCompress className="w-4 h-4" /> : <FaExpand className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="bg-gray-50 p-4 min-h-[800px]">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {pdfPath && !pdfError ? (
            <iframe
              src={pdfPath}
              className="w-full h-[800px] border-0"
              title={title}
              onLoad={handlePdfLoad}
              onError={handlePdfError}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-[800px] text-gray-500 text-center px-4">
              <FaFilePdf className="w-16 h-16 mb-4 text-red-300" />
              <p className="text-lg font-semibold">
                {pdfError ? 'PDF could not be loaded' : 'PDF not available'}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {pdfError
                  ? 'There was an error loading the PDF file.'
                  : 'Please check the file path or upload a PDF.'}
              </p>
              {pdfPath && (
                <>
                  <p className="text-xs text-gray-400 mb-2">Attempted to load: {pdfPath}</p>
                  <button
                    onClick={() => window.open(pdfPath, '_blank')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    Open in New Tab
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
