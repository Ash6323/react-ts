import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav id="sidebar">
      <div>
        <Button className = "sidebar-items" onClick={()=>navigate("/")}>Dashboard</Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="sidebar-items">Matters</Dropdown.Toggle>
          <Dropdown.Menu className="sidebar-dropdown-menu ">
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Matters/AddMatter")}>Add New</Dropdown.Item>
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Matters/ViewAllMatters")}>View All</Dropdown.Item>
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Matters/ByClients")}>View all by Clients</Dropdown.Item>
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Matters/ForClient")}>View all for Client</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="sidebar-items">Invoices</Dropdown.Toggle>
          <Dropdown.Menu className="sidebar-dropdown-menu ">
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Invoices/ByMatters")}>View all by Matters</Dropdown.Item>
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Invoices/ForMatter")}>View all for Matter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
    
  );
};
export default Sidebar;