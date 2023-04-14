import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div>
        <Button className = "sidebar-items">
          <Link className="link-Class" to="/">Dashboard</Link>
        </Button>  
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="sidebar-items">Products</Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="dropdown-items"><Link className="link-Class" to="Add-Product">Add Product</Link></Dropdown.Item>
            <Dropdown.Item className="dropdown-items"><Link className="link-Class" to="View-Products">View Products</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Sidebar;