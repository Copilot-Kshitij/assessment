import React from "react";
import DataFetcher from "./components/DataFetcher";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <Dashboard></Dashboard>
      <h1>Electric Vehicle Population Data</h1>
      <DataFetcher />     
    </div>
  );
}

export default App;
