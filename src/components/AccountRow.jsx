import React, { useState } from 'react';

const AccountRow = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (rowId) => {
    setExpandedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };
  const renderRow = (rowId, rowData) => {
    const isExpanded = expandedRows.includes(rowId);
    return (
      <React.Fragment key={rowId}>
        <tr className={`border-b ${isExpanded ? 'bg-gray-100' : 'bg-white'}`}>
          <td className='px-4 py-2'>{rowId}</td>
          <td className='px-4 py-2'>
            <span
              className='mx-1 cursor-pointer'
              onClick={() => toggleRow(rowId)}
            >
              {isExpanded ? '-' : '+'}
            </span>
            {rowData.account_name}
          </td>
          <td className='px-4 py-2'>{rowData.current}</td>
          <td className='px-4 py-2'>{rowData.previous}</td>
        </tr>
        {isExpanded && rowData.children && renderChildRows(rowData.children)}
      </React.Fragment>
    );
  };
  const renderChildRows = (children) => {
    return Object.entries(children).map(([childRowId, childRowData]) =>
      renderRow(childRowId, childRowData)
    );
  };
  return (
    <table className='w-full table-auto border-collapse'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='px-4 py-2 text-left'>Id</th>
          <th className='px-4 py-2 text-left'>Account Name</th>
          <th className='px-4 py-2 text-left'>Current</th>
          <th className='px-4 py-2 text-left'>Previous</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([rowId, rowData]) =>
          renderRow(rowId, rowData)
        )}
      </tbody>
    </table>
  );
};

export default AccountRow;
