import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  /* Row, Col, */ CardColumns,
} from 'react-bootstrap';
import withListLoading from '../../Loading/withListLoading';
import ParentCard from '../Card';
import { DataContext } from '../../Context';
import sentryLogger from '../../../Functions/Logger';
import CenterSpinner from '../../Loading/Center';

const ParentsBase = ({ parents }) => (
  <CardColumns>
    {parents
      .sort((a, b) => a.birthday.localeCompare(b.birthday))
      .map(parent => (
        // <Col md={4} sm={6}>
        <ParentCard key={parent._id} {...parent} />
        // </Col>
      ))}
  </CardColumns>
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
        updateNode('parents', result.data);
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
    <Container>
      <ParentsWithLoading
        LoadingFallback={CenterSpinner}
        loading={data.parents}
        parents={data.parents}
        error={readError}
      />
    </Container>
  );
};

export default ParentsPage;
