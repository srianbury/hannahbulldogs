import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const BottomNav = () => (
  <Navbar className='border border-dark border-left-0 border-right-0 border-bottom-0 mt-2'>
    <Nav className="mr-auto" />
    <Nav>
        <a className='ml-2'
            href='https://www.instagram.com/stanleybulldogs/'
            target='_blank'
            rel='noopener noreferrer'>
            <i className="fab fa-instagram fa-2x text-danger"></i>
        </a>
        <a className='ml-2'
            href="sms:+1-480-310-0538"
            target='_blank'
            rel='noopener noreferrer'>
            <i className="fas fa-phone fa-2x text-danger"></i>
        </a>
        <a className='ml-2'
            href="sms:+1-480-310-0538"
            target='_blank'
            rel='noopener noreferrer'>
            <i className="fas fa-envelope fa-2x text-danger"></i>
        </a>
    </Nav>
  </Navbar>
);

export default BottomNav;
