import React from "react";
import { Line } from "react-chartjs-2";

const CompanyChart = ({ chartLabels }) => {
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Companies",
        data: [0, 9, 3, 5, 1.5, 2, 1.5, 11, 7],
        backgroundColor: "	rgb(255, 86, 238)",
      },
    ],
  };
  return <Line data={chartData} />;
};

export default React.memo(CompanyChart);
