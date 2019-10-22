import React from 'react';
import Header from './header.js';
import { AboutBrief } from '../About';
import { GalleryPreview } from '../Gallery';

const Home = () => (
    <>
        <Header />
        <GalleryPreview />
        <AboutBrief />
    </>
);

export default Home;