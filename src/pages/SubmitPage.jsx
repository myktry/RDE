import React, { useState } from 'react';
import Layout from '../components/Layout';
import FormField from '../components/FormField';
import CheckboxGroup from '../components/CheckboxGroup';
import FileUpload from '../components/FileUpload';
import TextAreaField from '../components/TextAreaField';
import DragDropUpload from '../components/DragDropUpload';

const SubmitPage = () => {
  const [formData, setFormData] = useState({
    reportFile: null,
    reportTitle: '',
    description: '',
    objectives: '',
    researchCenter: '',
    researchAgenda: [],
    dostSPs: [],
    sustainableDevelopmentGoals: [],
    setiScorecard: null,
    gadCertificate: null,
    matrixOfCompliance: null
  });

  const researchCenterOptions = [
    { value: '', label: 'Select research center' },
    { value: 'Center for Research and Development', label: 'Center for Research and Development' },
    { value: 'Center for Technology Innovation', label: 'Center for Technology Innovation' },
    { value: 'Center for Agricultural Research', label: 'Center for Agricultural Research' },
    { value: 'Center for Environmental Studies', label: 'Center for Environmental Studies' },
    { value: 'Center for Health Sciences', label: 'Center for Health Sciences' },
    { value: 'Center for Engineering Research', label: 'Center for Engineering Research' },
    { value: 'Center for Social Sciences', label: 'Center for Social Sciences' },
    { value: 'Center for Business and Economics', label: 'Center for Business and Economics' }
  ];

  const researchAgendaOptions = [
    'Agriculture, Aquatic and Natural Resources',
    'Industry, Energy and Emerging Technology',
    'Health Research and Development',
    'Basic Research',
    'Social Sciences and Humanities',
    'Cross-cutting Concerns'
  ];

  const dostSPsOptions = [
    'Smart Agriculture',
    'Smart Manufacturing',
    'Smart Cities and Communities',
    'Smart Health',
    'Smart Education',
    'Smart Environment',
    'Smart Transportation',
    'Smart Energy',
    'Smart Information and Communications Technology',
    'Smart Defense and Security'
  ];

  const sdgOptions = [
    'No Poverty',
    'Zero Hunger',
    'Good Health and Well-being',
    'Quality Education',
    'Gender Equality',
    'Clean Water and Sanitation',
    'Affordable and Clean Energy',
    'Decent Work and Economic Growth',
    'Industry, Innovation and Infrastructure',
    'Reduced Inequalities',
    'Sustainable Cities and Communities',
    'Responsible Consumption and Production',
    'Climate Action',
    'Life Below Water',
    'Life on Land',
    'Peace, Justice and Strong Institutions',
    'Partnerships for the Goals'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileSelect = (file) => {
    setFormData(prev => ({
      ...prev,
      reportFile: file
    }));
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleFileChange = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Report</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <DragDropUpload 
              onFileSelect={handleFileSelect}
              acceptedTypes="PDF, DOC, DOCX"
              maxSize="10MB"
            />
          </div>

          <div className="mb-8">
            <FormField
              label="Report Title"
              value={formData.reportTitle}
              onChange={(value) => handleInputChange('reportTitle', value)}
              placeholder="Enter report title"
            />
          </div>

          <div className="mb-8">
            <TextAreaField
              label="Description"
              value={formData.description}
              onChange={(value) => handleInputChange('description', value)}
              placeholder="Enter report description"
              rows={4}
            />
          </div>

          <div className="mb-8">
            <TextAreaField
              label="Objectives"
              value={formData.objectives}
              onChange={(value) => handleInputChange('objectives', value)}
              placeholder="Enter research objectives"
              rows={4}
            />
          </div>

          <div className="mb-8">
            <FormField
              label="Research Center"
              required
              type="select"
              value={formData.researchCenter}
              onChange={(value) => handleInputChange('researchCenter', value)}
              placeholder="Select research center"
              options={researchCenterOptions}
            />
          </div>

          <div className="mb-8">
            <CheckboxGroup
              label="Research Agenda"
              required
              options={researchAgendaOptions}
              selectedValues={formData.researchAgenda}
              onChange={(value, checked) => handleCheckboxChange('researchAgenda', value, checked)}
              hint="Select the RDE Agenda that aligns best with your study"
              columns={2}
            />
          </div>

          <div className="mb-8">
            <CheckboxGroup
              label="DOST SPs"
              required
              options={dostSPsOptions}
              selectedValues={formData.dostSPs}
              onChange={(value, checked) => handleCheckboxChange('dostSPs', value, checked)}
              hint="Select the most applicable category from the DOST SPs that best aligns with your study"
              columns={1}
            />
          </div>

          <div className="mb-8">
            <CheckboxGroup
              label="Sustainable Development Goal"
              required
              options={sdgOptions}
              selectedValues={formData.sustainableDevelopmentGoals}
              onChange={(value, checked) => handleCheckboxChange('sustainableDevelopmentGoals', value, checked)}
              hint="Select the SDG that best aligns with your study"
              columns={2}
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
              Supporting Documents
            </h3>
            
            <div className="space-y-6">
              <FileUpload
                label="Upload SETI Scorecard"
                onChange={(file) => handleFileChange('setiScorecard', file)}
                accept=".pdf,.doc,.docx"
              />
              
              <FileUpload
                label="Upload GAD Certificate"
                onChange={(file) => handleFileChange('gadCertificate', file)}
                accept=".pdf,.doc,.docx"
              />
              
              <FileUpload
                label="Upload Matrix of Compliance (If Applicable)"
                onChange={(file) => handleFileChange('matrixOfCompliance', file)}
                accept=".pdf,.doc,.docx"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SubmitPage;
