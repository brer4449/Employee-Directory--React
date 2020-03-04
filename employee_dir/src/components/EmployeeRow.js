import React from "react";

const columns = [
  { id: 1, label: "image" },
  { id: 2, label: "name" },
  { id: 4, label: "email" },
  { id: 3, label: "phone" },
  { id: 5, label: "DOB" }
];

const trStyle = {
  width: 100
};
function EmployeeRow(props) {
  return (
    <div>
      <table>
        <thead>
          <tr style={trStyle}>
            {columns.map(column => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={props.img} alt="Bio pic of random user"></img>
            </td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.dob}</td>
          </tr>
        </tbody>
      </table>
      <p>
        Employee 1 {props.name} {props.email} {props.phone}
      </p>
    </div>
  );
}

export default EmployeeRow;
