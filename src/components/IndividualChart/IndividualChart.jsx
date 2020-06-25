import React from "react";
import { Line } from "react-chartjs-2";

const IndividualChart = ({ chartLabels }) => {
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Individuals",
        data: [0, 9, 3, 5, 1.5, 2, 1.5, 11, 7],
        backgroundColor: "rgb(65, 198, 179)",
      },
    ],
  };
  return <Line data={chartData} />;
};

export default React.memo(IndividualChart);
