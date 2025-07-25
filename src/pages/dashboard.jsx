import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import SixPCard from "../components/SixPCard";
import AgendaReport from "../components/agendareport";
import SDGReport from "../components/SDG";
import Header from "../components/header";
import UserAccount from "../components/useraccount";
import { FaFileAlt, FaLightbulb, FaCogs, FaUsers, FaHandshake, FaGavel } from "react-icons/fa";
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
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (context) {
          const index = context.dataIndex;
          const value = context.parsed;
          const sdgNumber = index + 1;
          const sdgName = sdgLabels[index] || `SDG ${sdgNumber}`;
          return `SDG ${sdgNumber} - ${sdgName}: ${value} project${value !== 1 ? 's' : ''}`;
        }
      }
    }
  }
};

// Summing across a year range
function sumAcrossYears(data, from, to) {
  const result = { rde: [], ext: [], kttd: [] };

  for (let year = from; year <= to; year++) {
    const yearData = data[year];
    if (!yearData) continue;

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
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="flex flex-1 pt-[80px] overflow-hidden"> {/* Adjust top padding to header height */}
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r h-full fixed left-0 top-[80px] bottom-0 z-40">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-0 md:ml-64 overflow-y-auto p-4 sm:p-6 space-y-6 bg-gray-100">
          {/* Year Filter */}
          <div className="flex justify-end items-center space-x-2">
            <select
              className="border p-1 rounded"
              value={year.from}
              onChange={(e) => setYear({ ...year, from: +e.target.value })}
            >
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
            <span>to</span>
            <select
              className="border p-1 rounded"
              value={year.to}
              onChange={(e) => setYear({ ...year, to: +e.target.value })}
            >
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
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
          <UserAccount />
        </main>
      </div>
    </div>
  );
}
