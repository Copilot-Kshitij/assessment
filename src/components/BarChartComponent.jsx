import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarChartComponent = () => {
  const { allData } = useSelector((state) => state.data);

  
  const manufacturerData = allData.reduce((acc, item) => {
    const make = item.Make;
    acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(manufacturerData).map(([make, count]) => ({
    name: make,
    count,
  }));

  return (
    <BarChart width={400} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
