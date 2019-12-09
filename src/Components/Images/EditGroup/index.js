import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const EditGroup = ({
  images,
  editImage: EditImage,
  editImageFuncs,
}) => (
  <Row className="mb-1 mt-1">
    {images.map(image => (
      <Col
        xs={6}
        sm={6}
        md={4}
        lg={3}
        key={image.url}
        className="mb-1 mt-1"
      >
        <EditImage
          src={image.url}
          alt="bulldog"
          {...editImageFuncs}
        />
      </Col>
    ))}
  </Row>
);
EditGroup.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  editImage: PropTypes.func.isRequired, // the edit component
  editImageFuncs: PropTypes.object.isRequired, // the functions associated with the edit component
};

export default EditGroup;
