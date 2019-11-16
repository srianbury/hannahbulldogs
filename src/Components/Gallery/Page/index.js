import React, { useState, useEffect } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Container, Row, Col } from 'react-bootstrap';
import withListLoading from '../../Loading/withListLoading';

const GalleryPage = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    async function read() {
      const response = await fetch(
        `http://localhost:4020/api/dev/gallery`,
      );
      const result = await response.json();
      setImages(result.data);
    }
    read();
  }, []);
  return (
    <Container>
      <Row>
        <GalleryWithListLoading loading={images} images={images} />
      </Row>
    </Container>
  );
};

const Gallery = ({ images }) => (
  <>
    {images.map(image => (
      <Col sm={6} key={image._id}>
        <InstagramEmbed
          url={image.url}
          maxWidth={200}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </Col>
    ))}
  </>
);
const GalleryWithListLoading = withListLoading(Gallery);

export default GalleryPage;
