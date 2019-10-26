import React from "react";
import { Card, Carousel } from "react-bootstrap";

const DogCard = ({ name, sex, breed, images }) => (
  <Card>
    <Carousel>
      {images.map(image => (
        <Carousel.Item key={image._id}>
          <img
            className="img img-fluid"
            src={image.url}
            alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
    <Card.Body>
      <Card.Title className="d-flex justify-content-between">
        <div>{name}</div>
        <div>{getSex(sex)}</div>
      </Card.Title>
      <Card.Text>{breed}</Card.Text>
    </Card.Body>
  </Card>
);

function getSex(sex){
    return sex ? 'Female' : 'Male';
}

export default DogCard;
