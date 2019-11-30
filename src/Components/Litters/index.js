import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import withListLoading from '../Loading/withListLoading';
import LitterCard from './desc';
import { DataContext } from '../Context';
import sentryLogger from '../../Functions/Logger';
import CenterSpinner from '../Loading/Center';
import { DATA } from '../../Constants';

const LitterPageLogic = () => {
  const { data, updateNode } = useContext(DataContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/litters`,
        );
        const result = await response.json();
        updateNode(DATA.PUPPIES, result.data);
      } catch (e) {
        sentryLogger(e);
        setError(new Error('Failed to fetch.'));
      }
    }

    if (!data.puppies) {
      read();
    }
  }, [data.puppies, updateNode]);
  return (
    <LitterPageWithListLoading
      LoadingFallback={CenterSpinner}
      error={error}
      loading={data.puppies}
      litters={data.puppies}
    />
  );
};

const LitterPageView = ({ litters }) => (
  <Row>
    {litters
      .sort((a, b) => a.birthday.localeCompare(b.birthday))
      .map(litter => (
        <Col sm={12} key={litter._id}>
          <LitterCard key={litter._id} litter={litter} />
        </Col>
      ))}
  </Row>
);
const LitterPageWithListLoading = withListLoading(LitterPageView);

export default LitterPageLogic;
export { LitterCard };
