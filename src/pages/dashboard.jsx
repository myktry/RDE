import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import SixPCard from "../components/SixPCard";
import AgendaReport from "../components/agendareport";
import SDGReport from "../components/SDG";
import Header from "../components/header";
import { FaFileAlt, FaLightbulb, FaCogs, FaUsers, FaHandshake, FaGavel, FaCalendarAlt } from "react-icons/fa";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const sixPData = [
  { icon: <FaFileAlt />, label: "Total of Publications", value: 40 },
  { icon: <FaLightbulb />, label: "Total of Patent", value: 5 },
  { icon: <FaCogs />, label: "Total of Products", value: 10 },
  { icon: <FaUsers />, label: "People and Services", value: 10 },
  { icon: <FaHandshake />, label: "Places and Partnerships", value: 15 },
  { icon: <FaGavel />, label: "Policies", value: 3 },
];

//Example of dynamic agenda data by year
const agendaDataByYear = {
  2023: [
    { label: 'Agriculture, Aquatic, and Agro-Forestry', rdeg: 200, kttd: 300, ext: 350 },
    { label: 'Business and Trade', rdeg: 10, kttd: 15, ext: 20 },
    { label: 'Social Sciences and Education', rdeg: 10, kttd: 10, ext: 10 },
    { label: 'Engineering and Technology', rdeg: 5, kttd: 15, ext: 25 },
    { label: 'Environment and Natural Resources', rdeg: 10, kttd: 15, ext: 10 },
    { label: 'Health and Wellness', rdeg: 10, kttd: 10, ext: 15 },
    { label: 'Peace and Security', rdeg: 5, kttd: 5, ext: 10 },
  ],
  2024: [
    { label: 'Agriculture, Aquatic, and Agro-Forestry', rdeg: 50, kttd: 50, ext: 30 },
    { label: 'Business and Trade', rdeg: 5, kttd: 5, ext: 5 },
    { label: 'Social Sciences and Education', rdeg: 0, kttd: 10, ext: 5 },
    { label: 'Engineering and Technology', rdeg: 5, kttd: 5, ext: 5 },
    { label: 'Environment and Natural Resources', rdeg: 5, kttd: 5, ext: 5 },
    { label: 'Health and Wellness', rdeg: 10, kttd: 0, ext: 5 },
    { label: 'Peace and Security', rdeg: 5, kttd: 5, ext: 10 },
  ],
  2025: [
    { label: 'Agriculture, Aquatic, and Agro-Forestry', rdeg: 50, kttd: 0, ext: 20 },
    { label: 'Business and Trade', rdeg: 0, kttd: 5, ext: 0 },
    { label: 'Social Sciences and Education', rdeg: 0, kttd: 0, ext: 5 },
    { label: 'Engineering and Technology', rdeg: 0, kttd: 0, ext: 0 },
    { label: 'Environment and Natural Resources', rdeg: 0, kttd: 0, ext: 0 },
    { label: 'Health and Wellness', rdeg: 0, kttd: 0, ext: 0 },
    { label: 'Peace and Security', rdeg: 0, kttd: 0, ext: 0 },
  ],
};

const sdgData = {
  2023: {
    rde: [1, 2, 3, 1, 1, 2, 1, 2, 1, 3, 2, 2, 1, 2, 1, 1, 1],
    ext: [2, 1, 2, 3, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1],
    kttd: [3, 3, 1, 2, 1, 3, 2, 3, 2, 1, 3, 1, 2, 2, 1, 3, 2],
  },
  2024: {
    rde: [1, 2, 1, 2, 1, 2, 2, 1, 3, 2, 2, 1, 1, 2, 3, 2, 1],
    ext: [3, 2, 1, 1, 2, 3, 1, 2, 1, 2, 2, 3, 2, 1, 3, 2, 3],
    kttd: [2, 2, 2, 3, 1, 1, 3, 2, 1, 3, 2, 2, 1, 1, 2, 3, 1],
  },
  2025: {
    rde: [2, 3, 1, 2, 2, 3, 1, 1, 2, 3, 1, 2, 2, 2, 3, 1, 1],
    ext: [1, 2, 2, 3, 1, 2, 3, 2, 1, 1, 2, 1, 2, 3, 2, 1, 2],
    kttd: [3, 1, 2, 2, 1, 3, 2, 1, 3, 1, 3, 2, 1, 2, 1, 2, 3],
  },
};

// Chart config
const getChartData = (values) => ({
  datasets: [
    {
      data: values,
      backgroundColor: [
        '#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5',
        '#039BE5', '#00ACC1', '#00897B', '#43A047', '#7CB342', '#C0CA33',
        '#FDD835', '#FFB300', '#FB8C00', '#F4511E', '#6D4C41'
      ],
      borderWidth: 1,
    },
  ],
});

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

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

function sumAcrossYears(data, from, to) {
  const result = { rde: [], ext: [], kttd: [] };

  for (let year = from; year <= to; year++) {
    const yearData = data[year] || { rde: [], ext: [], kttd: [] };

    ['rde', 'ext', 'kttd'].forEach((key) => {
      result[key] = result[key].length
        ? result[key].map((val, i) => val + yearData[key][i])
        : [...yearData[key]];
    });
  }

  return result;
}

function combineAgendaData(data, from, to) {
  const agendaMap = new Map();

  for (let year = from; year <= to; year++) {
    const yearData = data[year] || [];

    for (const item of yearData) {
      if (!agendaMap.has(item.label)) {
        agendaMap.set(item.label, { ...item });
      } else {
        const current = agendaMap.get(item.label);
        current.rdeg += item.rdeg;
        current.kttd += item.kttd;
        current.ext += item.ext;
      }
    }
  }

  return Array.from(agendaMap.values());
}

export default function Dashboard() {
  const [year, setYear] = useState({ from: 2023, to: 2025 });
  const yearRangeData = sumAcrossYears(sdgData, year.from, year.to);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Year Filter with Better UI */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FaCalendarAlt className="mr-2 text-red-600" />
                  Year Range Filter
                </h2>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">From:</label>
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
                      value={year.from}
                      onChange={(e) => setYear({ ...year, from: +e.target.value })}
                    >
                      <option value={2023}>2023</option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">To:</label>
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
                      value={year.to}
                      onChange={(e) => setYear({ ...year, to: +e.target.value })}
                    >
                      <option value={2023}>2023</option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Six P Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {sixPData.map((item, idx) => (
                <SixPCard key={idx} {...item} />
              ))}
            </div>

            {/* Agenda Report */}
            <AgendaReport data={combineAgendaData(agendaDataByYear, year.from, year.to)} />

            {/* SDG Report */}
            <SDGReport
              data={{
                rde: getChartData(yearRangeData.rde),
                ext: getChartData(yearRangeData.ext),
                kttd: getChartData(yearRangeData.kttd),
              }}
              options={chartOptions}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
