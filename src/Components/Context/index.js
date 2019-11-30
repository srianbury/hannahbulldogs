import React, { useState } from 'react';
import DataContext from './context';
import { DATA } from '../../Constants';

const DataContextWrapper = ({ children }) => {
  const [data, setData] = useState({});

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
    updateNode(DATA.PARENTS, listWithUpdatedData);
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
