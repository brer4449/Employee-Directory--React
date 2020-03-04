import React from "react";

const columns = [
  { id: 1, label: "image" },
  { id: 2, label: "name" },
  { id: 3, label: "phone" },
  { id: 4, label: "email" },
  { id: 5, label: "DOB" }
];
function EmployeeRow(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
      </table>
      <p>Employee 1 {props.name}</p>
    </div>
  );
}

export default EmployeeRow;
