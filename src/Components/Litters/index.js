import React, { useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import withListLoading from '../Loading/withListLoading';
import LitterCard from './desc';
import { DataContext } from '../Context';

const LitterPageLogic = () => {
  const { data, updateNode } = useContext(DataContext);

  useEffect(() => {
    async function read() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/litters`,
      );
      const result = await response.json();
      updateNode('puppies', result.data);
    }

    if (!data.puppies) {
      read();
    }
  }, [data.puppies, updateNode]);
  return (
    <LitterPageWithListLoading
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
