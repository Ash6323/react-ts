import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddMatter from './components/AddMatter';
import ViewMattersByClients from './components/ViewMattersByClients';
import ViewMattersForClient from './components/ViewMattersForClient';
import ViewInvoicesForMatter from './components/ViewInvoicesForMatter';
import ViewBillingForAttorney from './components/ViewBillingForAttorney';
import ViewBillingByAttorneys from './components/ViewBillingByAttorneys';
import ViewInvoicesByMatters from './components/ViewInvoicesByMatters';
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
              <Route path="Invoices/ByMatters" element={<ViewInvoicesByMatters />} />      
              <Route path="Invoices/ForMatter" element={<ViewInvoicesForMatter />} />
              <Route path="Invoices/BillingForAttorney" element={<ViewBillingForAttorney />} />
              <Route path="Invoices/BillingByAttorneys" element={<ViewBillingByAttorneys />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
