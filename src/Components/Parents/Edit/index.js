import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import withAuthorizationHOC from "../../Authorization";
import { ACCESS } from "../../../Constants";
import { AuthUserContext } from "../../Authentication";
import useForm from "../../..//Hooks/useForm";
import { makeToast } from "../../Notifications";

const EditParentBase = props => {
  const [validated, setValidated] = useState(false);
  const { state } = props.location;
  const { birthday, breed, name, sex /*_id*/ } = state;
  const { form, handleInputChange } = useForm({
    birthday,
    breed,
    name,
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
          <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
        </Form.Group>
        <div>{birthday}</div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            name="breed"
            value={form.breed}
            onChange={handleInputChange}
            as="textarea"
            placeholder='Breed'
            rows="2"
          />
        </Form.Group>
        <div>{sex ? 'Female' : 'Male'}</div>
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

export default EditParentPage;
