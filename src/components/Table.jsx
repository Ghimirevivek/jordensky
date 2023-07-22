import React from 'react';
import { data } from '../TableData';
import AccountRow from './AccountRow';
const TableComponent = () => {
  const apiResponse = data;

  return (
    <div className='max-w-screen-lg mx-auto mt-10'>
      <div className='text-3xl font-bold mb-4 mx-6'>My Table</div>
      <AccountRow data={apiResponse} />
    </div>
  );
};

export default TableComponent;
