import React, { useState, useEffect, useContext } from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import withListLoading from '../../Loading/withListLoading';
import ParentCard from '../Card';
import { DataContext } from '../../Context';
import CenterSpinner from '../../Loading/Center';

const ParentsBase = ({ parents }) => (
  <Container>
    <CardColumns>
      {parents
        .sort((a, b) => a.birthday.localeCompare(b.birthday))
        .map(parent => (
          <ParentCard key={parent._id} {...parent} />
        ))}
    </CardColumns>
  </Container>
);

const ParentsWithLoading = withListLoading(ParentsBase);
const ParentsPage = () => {
  const { data, readParents } = useContext(DataContext);
  const [readError, setReadError] = useState(null);

  useEffect(() => {
    if (!data.parents) {
      readParents(() => setReadError(new Error('Failed to fetch')));
    }
  }, [data.parents, readParents]);
  return (
    <ParentsWithLoading
      LoadingFallback={CenterSpinner}
      loading={data.parents}
      parents={data.parents}
      error={readError}
    />
  );
};

export default ParentsPage;
