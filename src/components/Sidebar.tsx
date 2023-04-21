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
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="sidebar-items">Customer</Dropdown.Toggle>
          <Dropdown.Menu className="sidebar-dropdown-menu ">
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Customer/AddCustomer")}>Add New</Dropdown.Item>
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("Customer/ViewAllCustomers")}>View List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
    
  );
};

export default Sidebar;