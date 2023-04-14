import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="">Products</Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="dropdown-items"><Link className="link-Class" to="Add-Product">Add Product</Link></Dropdown.Item>
            <Dropdown.Item className="dropdown-items"><Link className="link-Class" to="View-Products">View Products</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <h3>Hello</h3>
      </div>
    </nav>
  );
};

export default Sidebar;