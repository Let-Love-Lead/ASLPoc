import React from 'react';
import DataTable from './DataTable';
import PieChart from './Chart';

const DataPanel = () => {
  return (
  <div>
    <h2>Data Table</h2>
    <DataTable />
    <PieChart />
  </div>
  );
};

export default DataPanel;
