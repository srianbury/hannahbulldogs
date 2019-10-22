import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";
import trimText from './trimText';

const ProfilePreviewHome = ({ img, info }) => (
  <Card className="p-2 mb-2">
    <Row>
      <Col className='d-flex flex-wrap align-content-center'>
        <img className="img img-fluid" src={img.src} alt={img.alt} />
        <h4 className='mb-1 mt-1'>{info.name}</h4>
      </Col>
      <Col xs={8}>
        <div className='mb-1'>{trimText(info.desc, 128)}</div>
        <button className='btn btn-sm btn-secondary'>More</button>
      </Col>
    </Row>
  </Card>
);

ProfilePreviewHome.propTypes = {
  img: PropTypes.exact({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  info: PropTypes.exact({
    name: PropTypes.string,
    desc: PropTypes.string
  })
};

export default ProfilePreviewHome;
