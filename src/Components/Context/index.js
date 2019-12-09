import React, { useState } from 'react';
import DataContext from './context';
import { DATA } from '../../Constants';
import sentryLogger from '../../Functions/Logger';

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

  function updateLitters(updatedData) {
    const currentLitterList = data[DATA.PUPPIES];
    const listWithUpdatedData = currentLitterList.map(litter => {
      if (litter._id === updatedData._id) {
        return { ...litter, ...updatedData };
      }
      return litter;
    });
    updateNode(DATA.PUPPIES, listWithUpdatedData);
  }

  function getParent(id) {
    const currentParentList = data.parents;
    const parentAtId = currentParentList.find(
      parent => parent._id === id,
    );
    return parentAtId;
  }

  function getLitter(id) {
    const currentLitterList = data[DATA.PUPPIES];
    const litterAtId = currentLitterList.find(
      litter => litter._id === id,
    );
    return litterAtId;
  }

  async function readParents(onError) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/dogs`,
      );
      const result = await response.json();
      updateNode(DATA.PARENTS, result.data);
    } catch (e) {
      sentryLogger(e);
      onError();
    }
  }

  async function readHome(onError) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/home`,
      );
      const result = await response.json();
      updateNode(DATA.HOME, result.data);
    } catch (e) {
      sentryLogger(e);
      onError(new Error('Failed to fetch.'));
    }
  }

  return (
    <DataContext.Provider
      value={{
        data,
        updateNode,
        updateParents,
        updateLitters,
        getParent,
        getLitter,
        readParents,
        readHome,
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
