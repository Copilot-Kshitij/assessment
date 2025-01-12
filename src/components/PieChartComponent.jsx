import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = () => {
  const { allData } = useSelector((state) => state.data);

  const typeData = allData.reduce((acc, item) => {
    const type = item["Electric Vehicle Type"];
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(typeData).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
