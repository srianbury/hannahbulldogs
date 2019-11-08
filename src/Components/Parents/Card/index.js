import React, { useContext } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import { AuthUserContext } from "../../Authentication";
import withAuthorizationHOC from "../../Authorization";

const Edit = ({ data }) => (
  <Link
    to={{
      pathname: `${ROUTES.PARENTS_EDIT}/${data._id}}`,
      state: { ...data }
    }}
  >
    Edit
  </Link>
);
const EditWithAuthorization = withAuthorizationHOC(Edit);

const DogCard = props => {
  const { authUser } = useContext(AuthUserContext);
  const { name, sex, breed, images, editAccess } = props;
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
        <EditWithAuthorization
          data={props}
          authUser={authUser}
          accessLevels={editAccess}
          Fallback={null}
        />
      </Card.Body>
    </Card>
  );
};

function getSex(sex) {
  return sex ? "Female" : "Male";
}

export default DogCard;
export { EditWithAuthorization };
