import React from "react";
import Navigation from "./common";
import { Form } from 'react-bootstrap';
import ProfileDropdown from '../Profile/Dropdown';
import './styles.css';

const navColors = {
  variant: 'light',
  bg: 'light',
  expand: "sm"
};
const navItems = {
  class: {
    activeClassName: "text-primary"
  },
  items: [
    { to: "/", value: "Home" },
    { to: "/parents", value: "Parents" },
    { to: "/puppies", value: "Puppies" },
    { to: "/gallery", value: "Gallery" }
  ]
};
const navBrand = {
  highlight: false,
  brand: {
    to: "/",
    value: "HB"
  },
  class: {
    className: "navbar-brand",
    activeClassName: "text-danger"
  }
};

const RightMenu = () => (
  <>
    <Form inline>
      <ProfileDropdown />
    </Form>
  </>
);

const Navbar = () => (
  <Navigation 
    navItems={navItems} 
    navColors={navColors} 
    navBrand={navBrand}
    rightSide={<RightMenu />} />
);

export default Navbar;
