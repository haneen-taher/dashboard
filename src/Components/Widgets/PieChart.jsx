import React from "react";
import "./piechart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },

    title: {
      display: true,
      align: "start",
      text: "How did you hear about us?",
      font: {
        size: 16,
        family: "Montserrat",
        weight: "600",
      },
      padding: {
        top: 20,
        bottom: 30,
      },
    },
  },
};

export const data = {
  labels: ["Facebook", "Youtube", "Newsletter", "Google Ads"],
  datasets: [
    {
      label: "# of Votes",
      data: [
        faker.number.int({ max: 100 }),
        faker.number.int({ max: 100 }),
        faker.number.int({ max: 100 }),
        faker.number.int({ max: 100 }),
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
function PieChart() {
  return (
    <div className="piechart">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
