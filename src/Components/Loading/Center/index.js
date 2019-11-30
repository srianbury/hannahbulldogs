import React from 'react';
import { Spinner } from 'react-bootstrap';

const CenterSpinner = () => (
  <div className="d-flex align-items-center justify-content-center mt-4 mb-4">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default CenterSpinner;
