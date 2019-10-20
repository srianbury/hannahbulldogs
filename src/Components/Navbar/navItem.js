import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavItem = ({ to, value, activeClassName }) => (
  <LinkContainer to={to} exact={true} activeClassName={activeClassName}>
    <Nav.Link active={false}>{value}</Nav.Link>
  </LinkContainer>
);

export default NavItem;
