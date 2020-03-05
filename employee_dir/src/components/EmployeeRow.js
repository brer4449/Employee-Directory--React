import React from "react";
import API from "../utils/API";

const columns = [
  { id: 1, label: "image" },
  { id: 2, label: "name" },
  { id: 4, label: "email" },
  { id: 3, label: "phone" },
  { id: 5, label: "DOB" }
];

class EmployeeRow extends React.Component {
  state = {
    employees: [],
    filteredEmps: []
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getRandomUser()
      .then(res => {
        // console.log(res.data.results);
        let returnedData = res.data.results;
        let allEmps = [];
        returnedData.map(results => {
          let newEmp = {};
          newEmp.id = results.id.value;
          newEmp.img = results.picture.thumbnail;
          newEmp.name = results.name.first + " " + results.name.last;
          newEmp.email = results.email;
          newEmp.phone = results.phone;
          newEmp.dob = results.dob.date;
          // console.log(newEmp);
          allEmps.push(newEmp);
          this.setState({ employees: allEmps });
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <input placeholder="Search Here"></input>
        <table>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.id}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => {
              return (
                //included key equal to each person's SSN so I wouldn't get the "each child should have unique 'key' prop" error
                //SSN is a unique identifier
                <tr key={emp.id}>
                  <td>
                    <img src={emp.img}></img>
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.dob}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeRow;
