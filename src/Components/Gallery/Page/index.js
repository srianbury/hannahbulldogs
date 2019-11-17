import React, { useState, useEffect, useContext } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Container, Row, Col } from 'react-bootstrap';
import withListLoading from '../../Loading/withListLoading';
import { DataContext } from '../../Context';
import sentryLogger from '../../../Functions/Logger';

const GalleryPage = () => {
  const { data, updateNode } = useContext(DataContext);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function read() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/gallery`,
        );
        const result = await response.json();
        updateNode('gallery', result.data);
      } catch (e) {
        sentryLogger(e);
        setError(new Error('Failed to fetch.'));
      }
    }
    if (!data.gallery) {
      read();
    }
  }, [data.gallery, updateNode]);
  return (
    <Container>
      <Row>
        <GalleryWithListLoading
          error={error}
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
