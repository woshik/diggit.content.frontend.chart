import React, { Component } from "react";
import styles from "./DoughnutChart.module.css";
import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.elements.fontColor = "#849fb4";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0.4;
Chart.defaults.global.elements.line.borderColor =
  "transparent";

class Doughnut extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    const { labels, data } = this.props;

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data,
            backgroundColor: [
              "rgb(255, 86, 238)",
              "rgb(78, 255, 207)",
            ],
            borderColor: "transparent",
          },
        ],

        labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        title: {
          display: false,
        },
        centerText: {
          display: true,
          text: "250",
        },
      },
    });
  }
  render() {
    return (
      <canvas
        className={styles.canvas}
        id="mycanvas"
        ref={this.chartRef}
      ></canvas>
    );
  }
}

export default Doughnut;
