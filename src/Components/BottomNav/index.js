import React from 'react';
import { Navbar } from 'react-bootstrap';

const BottomNav = () => (
  <Navbar
    bg="light"
    variant="light"
    className="d-flex justify-content-around mt-2"
  >
    <a
      className="ml-2"
      href="https://www.instagram.com/stanleybulldogs/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram fa-2x text-danger"></i>
    </a>
    <a className="ml-2" href="sms:+1-480-310-0538">
      <i className="fas fa-phone fa-2x text-danger"></i>
    </a>
    <a className="ml-2" href="mailto:rsunbur@msn.com">
      <i className="fas fa-envelope fa-2x text-danger"></i>
    </a>
  </Navbar>
);

export default BottomNav;
