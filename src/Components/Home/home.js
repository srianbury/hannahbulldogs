import React from 'react';
import Header from './header.js';
import { AboutBrief } from '../About';
import { ParentsBrief } from '../Parents';

const Home = () => (
    <>
        <Header />
        <AboutBrief />
        <ParentsBrief />
    </>
);

export default Home;