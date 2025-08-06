import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// SDG Labels array - these should match the data array indices
const sdgLabels = [
  'No Poverty',
  'Zero Hunger',
  'Good Health and Well-being',
  'Quality Education',
  'Gender Equality',
  'Clean Water and Sanitation',
  'Affordable and Clean Energy',
  'Decent Work and Economic Growth',
  'Industry, Innovation and Infrastructure',
  'Reduced Inequality',
  'Sustainable Cities and Communities',
  'Responsible Consumption and Production',
  'Climate Action',
  'Life Below Water',
  'Life on Land',
  'Peace, Justice and Strong Institutions',
  'Partnerships for the Goals'
];

// SDG Colors - official UN SDG colors
const sdgColors = [
  '#E5243B', // SDG 1 - No Poverty
  '#DDA63A', // SDG 2 - Zero Hunger
  '#4C9F38', // SDG 3 - Good Health and Well-being
  '#C5192D', // SDG 4 - Quality Education
  '#FF3A21', // SDG 5 - Gender Equality
  '#26BDE2', // SDG 6 - Clean Water and Sanitation
  '#FCC30B', // SDG 7 - Affordable and Clean Energy
  '#A21942', // SDG 8 - Decent Work and Economic Growth
  '#FD6925', // SDG 9 - Industry, Innovation and Infrastructure
  '#DD1367', // SDG 10 - Reduced Inequality
  '#FD9D24', // SDG 11 - Sustainable Cities and Communities
  '#BF8B2E', // SDG 12 - Responsible Consumption and Production
  '#3F7E44', // SDG 13 - Climate Action
  '#0A97D9', // SDG 14 - Life Below Water
  '#56C02B', // SDG 15 - Life on Land
  '#00689D', // SDG 16 - Peace, Justice and Strong Institutions
  '#19486A'  // SDG 17 - Partnerships for the Goals
];

export default function SDGReport({ data, options }) {
  // Enhanced chart options with improved tooltips
  const enhancedOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            return `Proposals: ${value}`;
          },
          title: function (context) {
            return `SDG ${context[0].dataIndex + 1}`;
          }
        },
        backgroundColor: 'rgba(245, 245, 245, 0.98)',
        titleColor: '#1f2937',
        bodyColor: '#374151',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: true,
        padding: 16,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13,
          lineHeight: 1.6
        },
        boxPadding: 8,
        usePointStyle: true,
        boxWidth: 12,
        boxHeight: 12,
        bodySpacing: 4,
        bodyAlign: 'left'
      }

    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      arc: {
        borderWidth: 3,
        borderColor: '#ffffff',
        hoverBorderWidth: 4,
        hoverBorderColor: '#ffffff',
        hoverOffset: 8
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
      easing: 'easeInOutQuart'
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      animationDuration: 200
    }
  };

  // Update the data to include proper labels and colors
  const enhancedData = {
    rde: {
      ...data.rde,
      labels: sdgLabels,
      datasets: [{
        ...data.rde.datasets[0],
        backgroundColor: sdgColors,
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBorderColor: '#ffffff',
        hoverBackgroundColor: sdgColors.map(color => {
          // Lighten the color on hover
          const hex = color.replace('#', '');
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          const lighten = 30;
          const newR = Math.min(255, r + lighten);
          const newG = Math.min(255, g + lighten);
          const newB = Math.min(255, b + lighten);
          return `rgb(${newR}, ${newG}, ${newB})`;
        })
      }]
    },
    ext: {
      ...data.ext,
      labels: sdgLabels,
      datasets: [{
        ...data.ext.datasets[0],
        backgroundColor: sdgColors,
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBorderColor: '#ffffff',
        hoverBackgroundColor: sdgColors.map(color => {
          const hex = color.replace('#', '');
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          const lighten = 30;
          const newR = Math.min(255, r + lighten);
          const newG = Math.min(255, g + lighten);
          const newB = Math.min(255, b + lighten);
          return `rgb(${newR}, ${newG}, ${newB})`;
        })
      }]
    },
    kttd: {
      ...data.kttd,
      labels: sdgLabels,
      datasets: [{
        ...data.kttd.datasets[0],
        backgroundColor: sdgColors,
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBorderColor: '#ffffff',
        hoverBackgroundColor: sdgColors.map(color => {
          const hex = color.replace('#', '');
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          const lighten = 30;
          const newR = Math.min(255, r + lighten);
          const newG = Math.min(255, g + lighten);
          const newB = Math.min(255, b + lighten);
          return `rgb(${newR}, ${newG}, ${newB})`;
        })
      }]
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Sustainable Development Goal (SDG) Report
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* RDE */}
        <div className="flex flex-col items-center">
          <div className="w-70 h-70 flex items-center justify-center mb-4">
            <Doughnut
              data={enhancedData.rde}
              options={enhancedOptions}
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Research and Development Division
          </span>
        </div>

        {/* EXT */}
        <div className="flex flex-col items-center">
          <div className="w-70 h-70 flex items-center justify-center mb-4">
            <Doughnut
              data={enhancedData.ext}
              options={enhancedOptions}
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Extension Division
          </span>
        </div>

        {/* KTTD */}
        <div className="flex flex-col items-center">
          <div className="w-70 h-70 flex items-center justify-center mb-4">
            <Doughnut
              data={enhancedData.kttd}
              options={enhancedOptions}
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Knowledge Transfer & Technology Development
          </span>
        </div>
      </div>

      {/* SDG Legend */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">SDG Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sdgLabels.map((label, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200">
              <div
                className="w-4 h-4 rounded-full border-2 border-gray-300 shadow-sm"
                style={{ backgroundColor: sdgColors[index] }}
              ></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">SDG {index + 1}</span>
                <span className="text-xs text-gray-600">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-xs text-gray-600 mt-8 pt-4 border-t border-gray-200">
        © 2025 University Of Southeastern Philippines. All rights reserved.
      </footer>
    </div>
  );
}
