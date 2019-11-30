import React, { useState, useEffect, useContext } from 'react';
import Header from './header.js';
import { AboutBrief } from '../About';
import { GalleryPreview } from '../Gallery';
import withLoading from '../Loading/withLoading';
import { DataContext } from '../Context';
import sentryLogger from '../../Functions/Logger';
import CenterSpinner from '../Loading/Center';

const Home = () => {
  const { data, updateNode } = useContext(DataContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/home`,
        );
        const result = await response.json();
        updateNode('home', result.data);
      } catch (e) {
        sentryLogger(e);
        setError(new Error('Failed to fetch.'));
      }
    }

    if (!data.home) {
      read();
    }
  }, [data, updateNode]);

  return (
    <>
      <Header />
      <InfoWithLoading
        LoadingFallback={CenterSpinner}
        error={error}
        loading={data.home}
        data={data.home}
      />
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
