import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import APIGet from "./components/APIGet";
import APIPost from "./components/APIPost";

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
              <Route path="API/GET" element= { <APIGet /> }/>
              <Route path="API/POST" element={ <APIPost /> } />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
