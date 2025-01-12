import React, { useState } from "react";

const DataTable = ({ data }) => {


  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const displayedFields = [
    "Model",
    "Model Year",
    "Make",
    "Electric Vehicle Type",
    "Electric Range",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility",
    "Base MSRP",
    "Electric Utility",
  ];

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }


  const filteredData = data.map((item) =>
    Object.fromEntries(
      Object.entries(item).filter(([key]) => displayedFields.includes(key))
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
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
          {displayedFields.map((key) => (
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
            {displayedFields.map((field, i) => (
              <td key={i}>{row[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
