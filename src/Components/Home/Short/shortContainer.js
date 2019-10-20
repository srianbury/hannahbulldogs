import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ShortContainer = ({ title, left, right }) => {
  return (
    <div className="mt-2">
      <Container>
        <Row>
          <Col sm>
            <h3 className="mt-1 mb-0">{title}</h3>
            {left}
          </Col>
          <Col sm className='d-flex flex-wrap align-content-center'>
            {right}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShortContainer;
