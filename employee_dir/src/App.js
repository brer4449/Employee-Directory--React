import React from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmployeeRow from "./components/EmployeeRow";
import API from "./utils/API";
import "./App.css";

class App extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getRandomUser()
      .then(res => {
        console.log(res.data.results[0]);
        this.setState({
          employees: {
            img: res.data.results[0].picture.thumbnail,
            name:
              res.data.results[0].name.first +
              " " +
              res.data.results[0].name.last,
            email: res.data.results[0].email,
            phone: res.data.results[0].phone,
            dob: res.data.results[0].dob.date
          }
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <p>hello world</p>
        <Header />
        <SearchInput />
        <EmployeeRow
          img={this.state.employees.img}
          name={this.state.employees.name}
          email={this.state.employees.email}
          phone={this.state.employees.phone}
          dob={this.state.employees.dob}
        />
      </>
    );
  }
}

export default App;
