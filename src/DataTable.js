import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const data = [
  { Group: 'A', Expected: 10, Collected: 8 },
  { Group: 'B', Expected: 15, Collected: 12 },
  { Group: 'C', Expected: 20, Collected: 18 }
  // Add more rows as needed
];

const columns = [
  { Header: 'Group', accessor: 'Group' },
  { Header: 'Expected', accessor: 'Expected' },
  { Header: 'Collected', accessor: 'Collected' }
];

const DataTable = () => {
  return <ReactTable data={data} columns={columns} />;
};

export default DataTable;

