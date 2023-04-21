import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddCustomer from "./components/AddCustomer";
import ViewAllCustomers from "./components/ViewAllCustomers";

export const AppContext = React.createContext<any>({});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        console.log("Before Request..");
        // document.body.classList.add("loading-indicator");
        setLoading(true);
        return config;
      },
      function (error) {
        console.log("Error Before Request");
        setLoading(false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        console.log("After Request..");
        // document.body.classList.remove("loading-indicator");
        setLoading(false);
        return response;
      },
      function (error) {
        console.log("Error After Request");
        setLoading(false);
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <AppContext.Provider value={{ loading }}>
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
                  <Route
                    path="Customer/AddCustomer"
                    element={<AddCustomer />}
                  />
                  <Route
                    path="Customer/ViewAllCustomers"
                    element={<ViewAllCustomers />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </>
    </AppContext.Provider>
  );
}
export default App;
