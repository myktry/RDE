import React from "react";

function getChartData(values) {
  return {
    labels: Array.from({ length: 17 }, (_, i) => (i + 1).toString()),
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
  };
}
