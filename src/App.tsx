import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddCustomer from "./components/AddCustomer";
import ViewAllCustomers from "./components/ViewAllCustomers";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" element= { <Dashboard/> }/>
              <Route path="Customer/AddCustomer" element= { <AddCustomer /> }/>
              <Route path="Customer/ViewAllCustomers" element={ <ViewAllCustomers /> } />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
