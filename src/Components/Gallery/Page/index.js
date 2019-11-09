import React from "react";
import InstagramEmbed from "react-instagram-embed";
import { Container, Row, Col } from 'react-bootstrap';

const IMAGES = [
  { url: "https://www.instagram.com/p/B4EDxY3BIyR/" },
  { url: "https://www.instagram.com/p/B3ycF4RhGt3/" }
];

const GalleryPage = () => (
  <Container>
  <Row>
    {IMAGES.map(image => (
      <Col sm={6} key={image.url}>
        <InstagramEmbed
          url={image.url}
          maxWidth={200}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </Col>
    ))}
  </Row>
  </Container>
);

export default GalleryPage;
