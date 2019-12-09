import React, { useState, useEffect, useContext } from 'react';
import Header from './header.js';
import { AboutBrief } from '../About';
import { GalleryPreview } from '../Gallery';
import withLoading from '../Loading/withLoading';
import { DataContext } from '../Context';
import CenterSpinner from '../Loading/Center';

const Home = () => {
  const { data, readHome } = useContext(DataContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data.home) {
      readHome(() => setError(new Error('Failed to fetch.')));
    }
  }, [data, readHome]);

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
