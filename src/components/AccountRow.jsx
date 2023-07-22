import React, { useState } from 'react';

const AccountRow = ({ data }) => {
  // State to keep track of expanded rows (rows with children accounts)
  const [expandedRows, setExpandedRows] = useState([]);

  // Function to toggle the expansion of a row when clicked
  const toggleRow = (rowId) => {
    setExpandedRows(
      (prev) =>
        prev.includes(rowId)
          ? prev.filter((id) => id !== rowId) // If rowId is already expanded, remove it from the state to collapse
          : [...prev, rowId] // Otherwise, add it to the state to expand
    );
    //console.log(expandedRows);
  };

  // Function to render a single row with its children if expanded
  const renderRow = (rowId, rowData, depth = 0) => {
    // Adjust the value to change the indentation width
    const marginLeft = `${depth * 50}px`;
    const isExpanded = expandedRows.includes(rowId); // Check if the row is expanded (has children)

    return (
      <React.Fragment key={rowId}>
        <tr
          style={{ marginLeft: marginLeft }}
          className={`border-b ${isExpanded ? 'bg-gray-100' : 'bg-white'}`}
        >
          <td className={` px-6 py-3`}>{rowId}</td>
          <td className='px-6 py-3'>
            <span
              className='mx-1 cursor-pointer'
              onClick={() => toggleRow(rowId)}
            >
              {isExpanded ? '-' : '+'}{' '}
              {/* Show a minus sign if expanded, otherwise a plus sign */}
            </span>
            {rowData.account_name}
          </td>
          <td className='px-6 py-3'>{rowData.current}</td>
          <td className='px-6 py-3'>{rowData.previous}</td>
        </tr>
        {isExpanded &&
          rowData.children &&
          renderChildRows(rowData.children, depth + 1)}
      </React.Fragment>
    );
  };

  // Function to render child rows (recursively)
  const renderChildRows = (children, depth) => {
    return Object.entries(children).map(([childRowId, childRowData]) =>
      renderRow(childRowId, childRowData, depth)
    );
  };
  return (
    <table className='w-full table-auto border-collapse'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='px-6 py-3 text-left'>Id</th>
          <th className='px-6 py-3 text-left'>Account Name</th>
          <th className='px-6 py-3 text-left'>Current</th>
          <th className='px-6 py-3 text-left'>Previous</th>
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
