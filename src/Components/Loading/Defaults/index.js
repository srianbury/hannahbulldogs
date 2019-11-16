import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DefaultError = ({ error }) => {
  return <div className="text-danger">{error.message}</div>;
};
DefaultError.propTypes = {
  error: PropTypes.instanceOf(Error),
};

const DefaultLoading = () => (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export { DefaultError, DefaultLoading };
