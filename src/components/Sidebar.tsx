import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav id="sidebar">
      <div>
        <Button className = "sidebar-items" onClick={()=>navigate("/")}>Dashboard</Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="sidebar-items">Person</Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("API/GET")}>View Details</Dropdown.Item>
            <Dropdown.Item className="dropdown-items" onClick={()=>navigate("API/POST")}>Add Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Sidebar;