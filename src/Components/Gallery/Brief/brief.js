import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import DescContainer from '../../Home/Short';

const GalleryPreview = ({ images }) => (
  <Carousel interval={null} slide={false}>
    {images.map(pup => (
      <Carousel.Item key={pup._id}>
        <Image fluid src={pup.url} alt="puppy" />
      </Carousel.Item>
    ))}
  </Carousel>
);

const ShortText = ({ description }) => (
  <>
    <DescContainer.Title title="Puppies!" />
    <div className="mb-1">{description.text}</div>
  </>
);

const Brief = ({ puppies }) => (
  <DescContainer
    title="About"
    left={<ShortText description={puppies.description} />}
    right={<GalleryPreview images={puppies.images} />}
  />
);

export default Brief;
