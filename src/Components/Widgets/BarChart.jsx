import React from "react";
import "./barchart.css";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      align: "start",
      text: "How would you rate your overall satisfaction?",
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

const labels = [
  "Very satisfied ",
  "Satisfied",
  "Unsatisfied",
  "Very unsatisfied",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ max: 1000 })),
      backgroundColor: "rgba(75, 192, 192, 0.3)",
    },
  ],
};

function BarChart() {
  return (
    <div className="barchart">
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
