import React, { useState, useEffect, useContext } from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import withListLoading from '../../Loading/withListLoading';
import ParentCard from '../Card';
import { DataContext } from '../../Context';
import sentryLogger from '../../../Functions/Logger';
import CenterSpinner from '../../Loading/Center';
import { DATA } from '../../../Constants';

const ParentsBase = ({ parents }) => (
  <Container>
    <CardColumns>
      {parents
        .sort((a, b) => a.birthday.localeCompare(b.birthday))
        .map(parent => (
          // <Col md={4} sm={6}>
          <ParentCard key={parent._id} {...parent} />
          // </Col>
        ))}
    </CardColumns>
  </Container>
);

const ParentsWithLoading = withListLoading(ParentsBase);
const ParentsPage = () => {
  const { data, updateNode } = useContext(DataContext);
  const [readError, setReadError] = useState(null);

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/dogs`,
        );
        const result = await response.json();
        updateNode(DATA.PARENTS, result.data);
      } catch (e) {
        sentryLogger(e);
        setReadError(new Error('Failed to fetch.'));
      }
    }
    if (!data.parents) {
      read();
    }
  }, [data.parents, updateNode]);
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
