// Define widgets configuration
const widgetConfig = [
  {
    type: "LineChart",
    title: "Sales VS COGS",
    position: { row: 1, col: 3 },
    size: { width: 2, height: 2 },
    dataSource: null,
    priority: 2,
  },
  {
    type: "ProgressBar",

    position: { row: 1, col: 2 },
    size: { width: 1, height: 2 },
    dataSource: null,
    priority: 3,
  },
  {
    type: "PieChart",
    position: { row: 1, col: 1 },
    size: { width: 2, height: 2 },
    dataSource: null,
    priority: 4,
  },
  {
    type: "Tickets",
    title: "Tickets",
    position: { row: 2, col: 1 },
    size: { width: 3, height: 3 },
    dataSource: null,
    priority: 5,
  },
  {
    type: "BarChart",
    position: { row: 2, col: 2 },
    size: { width: 2, height: 2 },
    dataSource: null,
    priority: 6,
  },
];

export default widgetConfig;
