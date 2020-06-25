import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const TotalSignups = ({ individuals, companies }) => {
  const [DoughnutData, setDoughnutData] = useState({});

  useEffect(() => {
    setDoughnutData({
      labels: ["Individuals", "Companies"],
      datasets: [
        {
          label: "Rainfall",
          data: [individuals.length, companies.length],
          backgroundColor: [
            "rgb(27, 251, 228)",
            "rgb(255, 86, 238)",
          ],
        },
      ],
    });
  }, [individuals, companies]);

  return (
    <Doughnut
      data={DoughnutData}
      options={{
        legend: {
          display: true,
          position: "right",
        },
        width: "200",
        height: "200",
      }}
    />
  );
};

export default TotalSignups;
