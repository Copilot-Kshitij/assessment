import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === null) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.key === key) {
        return { key, direction: prevConfig.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          {Object.keys(data[0]).map((key) => (
            <th key={key} onClick={() => handleSort(key)} style={{ cursor: "pointer" }}>
              {key}
              {sortConfig.key === key ? (
                sortConfig.direction === "asc" ? " ▲" : " ▼"
              ) : (
                ""
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
