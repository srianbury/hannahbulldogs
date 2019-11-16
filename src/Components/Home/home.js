import React, { useState, useEffect } from 'react';
import Header from './header.js';
import { AboutBrief } from '../About';
import { GalleryPreview } from '../Gallery';
import withLoading from '../Loading/withLoading';

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function read() {
      const response = await fetch(`${process.env.PUBLIC_URL}/home`);
      const result = await response.json();
      setData(result.data);
    }
    read();
  }, []);
  return (
    <>
      <Header />
      <InfoWithLoading loading={data} data={data} />
    </>
  );
};

const Info = ({ data }) => (
  <>
    <GalleryPreview puppies={data.puppies} />
    <AboutBrief about={data.about} />
  </>
);
const InfoWithLoading = withLoading(Info);

export default Home;
