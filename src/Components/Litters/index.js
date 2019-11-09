import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import withListLoading from '../Loading/withListLoading';
import LitterCard from './desc';

const LitterPageLogic = () => {
  const [litters, setLitters] = useState(null);
  useEffect(()=>{
    async function read(){
      const response = await fetch(`http://localhost:4020/api/dev/litters`);
      const result = await response.json();
      const data = result.data;
      setLitters(data);
    }
    
    read();
  }, []);
  return(
    <LitterPageWithListLoading 
      loading={litters}
      litters={litters} />
  );
};

const LitterPageView = ({ litters }) => (
  <Row>
    {litters.sort((a, b) => a.birthday.localeCompare(b.birthday)).map(litter => 
      <Col sm={12}>
        <LitterCard 
          key={litter._id}
          litter={litter} />
      </Col>
    )}
  </Row>
);
const LitterPageWithListLoading = withListLoading(LitterPageView);



export default LitterPageLogic;
export { LitterCard };
