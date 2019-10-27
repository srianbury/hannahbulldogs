import React, { useContext } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ACCESS } from "../../../Constants";
import { AuthUserContext } from '../../Authentication';
import withAuthorization from '../../Authorization';


const editAccess = [ACCESS.ADMIN, ACCESS.MINDFLAYER];
const DogCard = ({ name, sex, breed, images }) => {
  const { authUser } = useContext(AuthUserContext);
  return (
    <Card>
      <Carousel>
        {images.map(image => (
          <Carousel.Item key={image._id}>
            <img className="img img-fluid" src={image.url} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div>{name}</div>
          <div>{getSex(sex)}</div>
        </Card.Title>
        <Card.Text>{breed}</Card.Text>
        {withAuthorization(authUser, editAccess) && <Link>Edit</Link>}
      </Card.Body>
    </Card>
  );
};

function getSex(sex) {
  return sex ? "Female" : "Male";
}

export default DogCard;
