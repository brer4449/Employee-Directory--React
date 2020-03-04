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
      .then(res => this.setState({ employees: res.data.name }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <h1>Hello world</h1>
        <Header />
        <SearchInput />
        <EmployeeRow name={this.state.name} />
      </>
    );
  }
}

export default App;
