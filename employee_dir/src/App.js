import React from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmployeeRow from "./components/EmployeeRow";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SearchInput />
      <EmployeeRow />
    </>
  );
}

export default App;
