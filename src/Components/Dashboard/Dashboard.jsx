import React from "react";
import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Widget from "../Widgets/Widget";
import LineChart from "../Widgets/LineChart";
import ProgressBar from "../Widgets/ProgressBar";
import Tickets from "../Widgets/Table";
import PieChart from "../Widgets/PieChart";
import BarChart from "../Widgets/BarChart";
import widgetConfig from "../dashboardConfig";

function Dashboard() {
  const sortedConfig = widgetConfig
    .filter((widget) =>
      ["LineChart", "ProgressBar", "PieChart", "BarChart"].includes(widget.type)
    )
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* Passing props */}
          <Widget type="Repairs" />
          <Widget type="Network unlocks" />
          <Widget type="Accessories & parts" />
          <Widget type="Trade In" />
        </div>
        <div className="charts">
          {sortedConfig.map((widget) => {
            switch (widget.type) {
              case "LineChart":
                return <LineChart key={widget.type} />;
              case "ProgressBar":
                return <ProgressBar key={widget.type} />;

              default:
                return null;
            }
          })}
          {/* <LineChart />
          <ProgressBar /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Tickets</div>
          <Tickets />
        </div>
        <div className="charts">
          {sortedConfig.map((widget) => {
            switch (widget.type) {
              case "PieChart":
                return <PieChart key={widget.type} />;
              case "BarChart":
                return <BarChart key={widget.type} />;
              default:
                return null;
            }
          })}
          {/* <BarChart />
          <PieChart /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
