import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import withAuthorizationHOC from '../../Authorization';
import formateDate from '../../../Functions/Format/Date';

const Edit = ({ data }) => (
  <Link to={`${ROUTES.PARENTS_EDIT}/${data._id}`}>Edit</Link>
);
const EditWithAuthorization = withAuthorizationHOC(Edit);

const DogCard = props => {
  const { name, sex, breed, birthday, images, editAccess } = props;
  return (
    <Card>
      <Carousel interval={null}>
        {images.map(image => (
          <Carousel.Item key={image._id}>
            <img
              className="img img-fluid"
              src={image.url}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div>
            <div>{name}</div>
            <div>Born: {formateDate(birthday)}</div>
          </div>
          <div>{getSex(sex)}</div>
        </Card.Title>
        <Card.Text>{breed}</Card.Text>
        <EditWithAuthorization
          data={props}
          editAccess={editAccess}
          Fallback={null}
        />
      </Card.Body>
    </Card>
  );
};

function getSex(sex) {
  return sex ? 'Female' : 'Male';
}

export default DogCard;
export { EditWithAuthorization };
