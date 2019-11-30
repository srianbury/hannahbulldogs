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

  function getParent(id) {
    const currentParentList = data.parents;
    const parentAtId = currentParentList.find(
      parent => parent._id === id,
    );
    return parentAtId;
  }

  return (
    <DataContext.Provider
      value={{
        data,
        updateNode,
        updateParents,
        getParent,
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
