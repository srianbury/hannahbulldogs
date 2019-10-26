import React from "react";
import Navigation from "./common";
import { Form } from 'react-bootstrap';
import ProfileDropdown from '../Profile/Dropdown';
import { ROUTES, TITLES } from '../../Constants';
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
    { to: ROUTES.HOME, value: TITLES.HOME },
    { to: ROUTES.PARENTS, value: TITLES.PARENTS },
    { to: ROUTES.PUPPIES, value: TITLES.PUPPIES },
    { to: ROUTES.GALLERY, value: TITLES.GALLERY },
  ]
};
const navBrand = {
  highlight: false,
  brand: {
    to: ROUTES.HOME,
    value: TITLES.ABBR,
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
