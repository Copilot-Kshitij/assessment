import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const LineChartComponent = () => {
  const { allData } = useSelector((state) => state.data);

  const yearData = allData.reduce((acc, item) => {
    const year = item["Model Year"];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(yearData)
    .map(([year, count]) => ({
      year: parseInt(year, 10),
      count,
    }))
    .sort((a, b) => a.year - b.year);

  return (
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="count" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;
