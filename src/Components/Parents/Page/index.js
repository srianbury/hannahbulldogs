import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import withListLoading from "../../Loading/withListLoading";
import ParentCard from "../Card";

const ParentsBase = ({ data }) => (
  <Row>
    <Col md={4} sm={6}>
      {data.map(parent => (
        <ParentCard key={parent._id} {...parent} />
      ))}
    </Col>
  </Row>
);

const ParentsWithLoading = withListLoading(ParentsBase);
const ParentsPage = () => {
  const [parents, setParents] = useState(null);
  const [readError, setReadError] = useState(null);

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch("http://localhost:4020/api/dev/dogs");
        const { ok } = response;
        if (ok) {
          const result = await response.json();
          const { data } = result;
          setParents(data);
        } else {
          throw new Error('');
        }
      } catch {
        setReadError(new Error("There was an error loading the data"));
      }
    }
    read();
  }, []);
  return (
    <Container>
      <ParentsWithLoading data={parents} error={readError} />
    </Container>
  );
};

export default ParentsPage;
