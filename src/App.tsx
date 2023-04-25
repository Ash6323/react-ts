import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddMatter from './components/AddMatter';
import ViewMattersByClients from './components/ViewMattersByClients';
import ViewMattersForClient from './components/ViewMattersForClient';
import ViewInvoicesForMatter from './components/ViewInvoicesForMatter';
import './App.css';



function App() {
  return (
    <>
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="Matters/AddMatter" element={<AddMatter />} />
              <Route path="Matters/ByClients" element={<ViewMattersByClients />} />
              <Route path="Matters/ForClient" element={<ViewMattersForClient />} />
              <Route path="Invoices/ForMatter" element={<ViewInvoicesForMatter />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
