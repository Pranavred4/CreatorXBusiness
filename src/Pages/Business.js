import React from 'react';
import DataTable from '../lib/table.js';
import data from '../data/Business.json';

export default function Business() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Name', headerName: 'Name', width: 130 },

    
    
  ];

  

  return (
    <>
      <div>Business</div>
      <DataTable rows={data} columns={columns} />
    </>
  );
}
