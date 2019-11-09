import React from "react";
import { Carousel, Image } from "react-bootstrap";
import DescContainer from '../Home/Short';

const LitterCarousel = ({ litter }) => (
  <Carousel interval={null} slide={false}>
    {litter.images.map(image => (
      <Carousel.Item key={image._id}>
        <Image 
          fluid 
          src={image.url} />
      </Carousel.Item>
    ))}
  </Carousel>
);

const ShortText = ({ litter }) => (
  <div>
    <h5>{litter.parents.mom} (mom)</h5>
    <h5>{litter.parents.dad} (dad)</h5>
    <h5>Born: {litter.birthday}</h5>
    <div className="mb-1">{litter.description}</div>
  </div>
);

const LitterCard = ({ litter }) => (
  <DescContainer 
    title=""
    left={<ShortText litter={litter} />}
    right={<LitterCarousel litter={litter} />} />
);

export default LitterCard;
