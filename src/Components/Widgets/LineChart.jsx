import React from "react";
import "./linechart.css";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },

    title: {
      display: true,
      align: "start",

      text: "Sales VS COGS",

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
    labels: {
      font: {
        size: 14,
        family: "Montserrat",
        weight: "400",
      },
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Number of invoice",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "COGS",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(60, 180, 100)",
      backgroundColor: "rgba(50, 180, 100, 0.5)",
    },
  ],
};

function LineChart() {
  return (
    <div className="linechart">
      <Line options={options} data={data} />
      <div className="line-bottom">
        <div className="details">
          <div className="det-title"> Number of invoice</div>
          <div className="detnumber">
            {faker.number.int({ min: 10, max: 300 })}
          </div>
        </div>
        <div className="details">
          <div className="det-title"> Sales</div>
          <div className="detnumber">
            {faker.finance.amount({ min: 500, max: 1000000, symbol: "$" })}
          </div>
        </div>

        <div className="details">
          <div className="det-title"> COGS</div>
          <p className="detnumber">
            {" "}
            {faker.finance.amount({ min: 500, max: 10000, symbol: "$" })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LineChart;
