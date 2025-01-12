import React from "react";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";

const Dashboard = () => {
  return (
    <div className="chart-container" >
      <h1 >Electric Vehicle Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div>
          <h2 class="chart-title">Vehicles by Manufacturer</h2>
          <div id="bar-chart" class="recharts-wrapper">

          <BarChartComponent />
          </div>
        </div>
        <div>
          <h2 class="chart-title">Vehicle Type Distribution</h2>
          <div id="pie-chart" class="recharts-wrapper">

          <PieChartComponent />
          </div>

        </div>
        <div>
          <h2 class="chart-title">Registration Trends</h2>
          <div id="line-chart" class="recharts-wrapper">

          <LineChartComponent />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
