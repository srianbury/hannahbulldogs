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

  function updateParents(updatedData) {
    const currentParentList = data.parents;
    const listWithUpdatedData = currentParentList.map(parent => {
      if (parent._id === updatedData._id) {
        return { ...parent, ...updatedData };
      }
      return parent;
    });
    updateNode('parents', listWithUpdatedData);
  }

  return (
    <DataContext.Provider
      value={{
        data,
        updateNode,
        updateParents,
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
