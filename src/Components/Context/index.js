import React, { useState } from 'react';
import DataContext from './context';

const DataContextWrapper = ({ children }) => {
  const [data, setData] = useState({
    home: null,
    parents: null,
    puppies: null,
    gallery: null,
  });

  function updateNode(key, results) {
    setData({ ...data, [key]: results });
  }

  return (
    <DataContext.Provider
      value={{
        data,
        updateNode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const withDataContext = Component => props => (
  <DataContextWrapper>
    <Component {...props} />
  </DataContextWrapper>
);

export default withDataContext;
export { DataContext };
