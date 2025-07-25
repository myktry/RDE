import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function AgendaReport({ data }) {
  return (
    <section className="bg-white rounded shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Achieved RDE Agenda Report</h3>

      {/* Agenda Bars */}
      <div className="space-y-6">
        {data.map((agenda, idx) => {
          const total = agenda.rdeg + agenda.kttd + agenda.ext || 1;
          const rdegPct = (agenda.rdeg / total) * 100;
          const kttdPct = (agenda.kttd / total) * 100;
          const extPct = (agenda.ext / total) * 100;

          return (
            <div key={idx}>
              <div className="mb-2 font-medium bg-white rounded shadow-md p-4 sm:p-6">{agenda.label}</div>
              <div className="flex h-5 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                <div
                  className="bg-red-600"
                  style={{ width: `${rdegPct}%` }}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={`RDEG: ${agenda.rdeg}`}
                />
                <div
                  className="bg-yellow-500"
                  style={{ width: `${kttdPct}%` }}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={`KTTD: ${agenda.kttd}`}
                />
                <div
                  className="bg-green-500"
                  style={{ width: `${extPct}%` }}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={`Extension: ${agenda.ext}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-600 rounded-sm" />
          <span>RDEG</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-sm" />
          <span>KTTD</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-sm" />
          <span>Extension</span>
        </div>
      </div>

      {/* Tooltip element (placed once) */}
      <ReactTooltip id="tooltip" place="top" effect="solid" />
    </section>
  );
}
