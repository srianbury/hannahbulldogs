import React, { useEffect, useContext } from 'react';
import Header from './header.js';
import { AboutBrief } from '../About';
import { GalleryPreview } from '../Gallery';
import withLoading from '../Loading/withLoading';
import { DataContext } from '../Context';

const Home = () => {
  const { data, updateNode } = useContext(DataContext);

  useEffect(() => {
    async function read() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/home`,
      );
      const result = await response.json();
      updateNode('home', result.data);
    }

    if (!data.home) {
      read();
    }
  }, [data, updateNode]);

  return (
    <>
      <Header />
      <InfoWithLoading loading={data.home} data={data.home} />
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
