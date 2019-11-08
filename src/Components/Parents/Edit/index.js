import React, { useContext, useState } from "react";
import { Container, Form, Button, Col, Row, Card } from "react-bootstrap";
import withAuthorizationHOC from "../../Authorization";
import { ACCESS } from "../../../Constants";
import { AuthUserContext } from "../../Authentication";
import useForm from "../../..//Hooks/useForm";
import { makeToast } from "../../Notifications";
import addImage from '../../../Assets/images/add_image.webp';

const EditParentBase = props => {
  const [validated, setValidated] = useState(false);
  const { state } = props.location;
  const { birthday, breed, name, sex, description, images /*_id*/ } = state;
  const { form, handleInputChange, handleChange } = useForm({
    birthday,
    breed,
    name,
    sex: sex ? 1 : 0,
    description,
    images,
  });

  function handleUpdate(event) {
    try {
      event.preventDefault();
      const formEvent = event.currentTarget;
      if (formEvent.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
        return;
      }

      // fetch
      // todo
      throw new Error("TODO");
    } catch {
      makeToast("TODO", makeToast.TYPES.ERROR);
    }
  }

  return (
    <>
      <h5>Edit</h5>
      <Form noValidate validated={validated} onSubmit={handleUpdate}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            value={form.name}
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required.
          </Form.Control.Feedback>
        </Form.Group>
        <div>{birthday}</div>
        <Form.Group controlId="breedcontrol">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            name="breed"
            value={form.breed}
            onChange={handleInputChange}
            as="textarea"
            placeholder="Breed"
            rows="2"
          />
        </Form.Group>
        <fieldset>
          <Form.Group>
            <Form.Label className='mr-2'>Gender</Form.Label>
            <Form.Check
              custom
              inline
              checked={form.sex===0}
              onChange={()=>handleChange({ sex: 0 })}
              label="male"
              type='radio'
              id='gender-male-radio'
            />
            <Form.Check
              custom
              inline
              checked={form.sex===1}
              onChange={()=>handleChange({ sex: 1 })}
              label="female"
              type='radio'
              id='gender-female-radio'
            />
          </Form.Group>
        </fieldset>
        <Form.Group controlId="breedcontrol">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={form.description}
            onChange={handleInputChange}
            as="textarea"
            placeholder="Description"
            rows="2"
          />
        </Form.Group>
        <Row className='mb-1 mt-1'>
          {form.images.map(image =>
            <Col xs={6} key={image._id}>
              <EditImage 
                src={image.url}
                alt='doggy' />
            </Col>  
          )}
          <Col>
            <EditImage 
              src={addImage}
              alt='addImage' />
          </Col>
        </Row>
        <Button type="submit" size="sm" variant="primary">
          Update
        </Button>
      </Form>
    </>
  );
};
const EditWithAuthorization = withAuthorizationHOC(EditParentBase);
const editAccess = [ACCESS.ADMIN, ACCESS.MINDFLAYER];

const EditParentPage = props => {
  const { authUser } = useContext(AuthUserContext);
  return (
    <Container>
      <EditWithAuthorization
        authUser={authUser}
        accessLevels={editAccess}
        {...props}
      />
    </Container>
  );
};

const EditImage = ({ src, alt }) => (
  <Card>
    <Card.Header className='text-right'>
      <Button 
        onClick={()=>console.log('todo')}
        variant="link" 
        className='p-0 text-danger'>Delete</Button>
    </Card.Header>
    <Card.Img 
      variant="bottom" 
      src={src} 
      alt={alt} />
  </Card>
);

export default EditParentPage;
