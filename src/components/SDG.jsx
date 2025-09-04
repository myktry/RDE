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
        enabled: false,
        external: function(context) {
          // Tooltip Element
          let tooltipEl = document.getElementById('chartjs-tooltip');

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = `
              <div style="background: rgba(245, 245, 245, 0.98); border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 200px;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                  <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 8px;">
                    <img id="tooltip-sdg-icon" src="" alt="SDG Icon" style="width: 50px; height: 50px; border-radius: 8px; display: block; margin: 0 auto;" />
                  </div>
                  <div id="tooltip-sdg-title" style="font-weight: bold; color: #1f2937; font-size: 11px; margin-bottom: 6px; text-align: center; width: 100%;"></div>
                  <div id="tooltip-sdg-value" style="color: #374151; font-size: 16px; font-weight: bold; text-align: center; width: 100%;"></div>
                </div>
              </div>
            `;
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set content
          if (tooltipModel.dataPoints) {
            const dataPoint = tooltipModel.dataPoints[0];
            const sdgNumber = dataPoint.dataIndex + 1;
            const sdgLabel = sdgLabels[dataPoint.dataIndex];
            const value = dataPoint.parsed;
            
            const img = tooltipEl.querySelector('#tooltip-sdg-icon');
            const title = tooltipEl.querySelector('#tooltip-sdg-title');
            const valueEl = tooltipEl.querySelector('#tooltip-sdg-value');
            
            img.src = `/sdg-goal-${sdgNumber}.jpg`;
            img.alt = `SDG ${sdgNumber}: ${sdgLabel}`;
            title.textContent = `SDG ${sdgNumber}: ${sdgLabel}`;
            valueEl.textContent = `Proposals: ${value}`;
          }

          // Positioning
          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 10 + 'px';
          tooltipEl.style.pointerEvents = 'none';
          tooltipEl.style.zIndex = 1000;
          tooltipEl.style.transform = 'translate(-50%, -100%)';
        }
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
              <img
                src={`/sdg-goal-${index + 1}.jpg`}
                alt={`SDG ${index + 1}: ${label}`}
                className="w-8 h-8 rounded-lg shadow-sm object-cover"
              />
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
