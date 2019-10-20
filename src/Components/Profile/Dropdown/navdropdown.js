import React from "react";
import { NavDropdown } from 'react-bootstrap';

const ProfileDropdown = () => (
  <NavDropdown 
    className='btn btn-sm btn-danger'
    title="Dropdown" 
    id="nav-dropdown"
    flip>
    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
  </NavDropdown>
);

export default ProfileDropdown;