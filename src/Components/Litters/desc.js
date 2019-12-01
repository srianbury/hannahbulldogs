import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import DescContainer from '../Home/Short';
import formatDate from '../../Functions/Format/Date';

const LitterCarousel = ({ litter }) => (
  <Carousel interval={null} slide={false}>
    {litter.images.map(image => (
      <Carousel.Item key={image._id}>
        <Image fluid src={image.url} />
      </Carousel.Item>
    ))}
  </Carousel>
);

const ShortText = ({ litter }) => (
  <div className="mt-1">
    <h5>Mom: {litter.parents.mom}</h5>
    <h5>Dad: {litter.parents.dad}</h5>
    <h5>Born: {formatDate(litter.birthday)}</h5>
    <div className="mb-1">{litter.description}</div>
  </div>
);

const LitterCard = ({ litter }) => (
  <DescContainer
    title=""
    right={<ShortText litter={litter} />}
    left={<LitterCarousel litter={litter} />}
  />
);

export default LitterCard;
