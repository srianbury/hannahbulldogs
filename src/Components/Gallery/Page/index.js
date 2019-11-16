import React, { useEffect, useContext } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Container, Row, Col } from 'react-bootstrap';
import withListLoading from '../../Loading/withListLoading';
import { DataContext } from '../../Context';

const GalleryPage = () => {
  const { data, updateNode } = useContext(DataContext);
  useEffect(() => {
    async function read() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/gallery`,
      );
      const result = await response.json();
      updateNode('gallery', result.data);
    }
    if (!data.gallery) {
      read();
    }
  }, [data.gallery, updateNode]);
  return (
    <Container>
      <Row>
        <GalleryWithListLoading
          loading={data.gallery}
          images={data.gallery}
        />
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
