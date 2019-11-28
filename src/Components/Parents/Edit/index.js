import React, { useContext } from 'react';
import {
  Container,
  Form,
  Button,
  Col,
  Row,
  Card,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import withAuthorizationHOC from '../../Authorization';
import { ACCESS } from '../../../Constants';
import { AuthUserContext } from '../../Authentication';
import { makeToast } from '../../Notifications';
import addImage from '../../../Assets/images/add_image.webp';
import _ from 'lodash';
import * as yup from 'yup';
import difference from '../../../Functions/Diff';
import { DataContext } from '../../Context';
import sentryLogger from '../../../Functions/Logger';

const EditParentBase = props => {
  const { authUser } = useContext(AuthUserContext);
  const { updateParents } = useContext(DataContext);
  const { state } = props.location;
  const { _id } = state;
  const initialValues = state;
  const validationSchema = yup.object({
    name: yup.string().required('Name is required.'),
  });
  async function onSubmit(values) {
    try {
      const diff = difference(values, state);
      if (!_.isEmpty(diff)) {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/dogs/${_id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authUser.token}`,
            },
            body: JSON.stringify(diff),
          },
        );
        if (response.ok) {
          makeToast('Success!', makeToast.TYPES.SUCCESS);
          const result = await response.json();
          updateParents(result.data);
        } else {
          const { status } = response;
          const message =
            status === 401
              ? 'Unauthorized'
              : 'An unexpected error occurred...';
          makeToast(message, makeToast.TYPES.ERROR);
        }
      }
    } catch (error) {
      makeToast(
        'An unexpected error occurred...',
        makeToast.TYPES.ERROR,
      );
      sentryLogger(error);
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <h5>Edit</h5>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            {...formik.getFieldProps('name')}
            type="text"
            placeholder="Name"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </Form.Group>
        <Form.Group controlId="birthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="date"
            name="birthday"
            value={formik.values.birthday}
            onChange={e => console.log(e.target.value)}
          />
          {formik.touched.birthday && formik.errors.birthday && (
            <div className="text-danger">
              {formik.errors.birthday}
            </div>
          )}
        </Form.Group>
        <div>{formik.values.birthday}</div>
        <Form.Group controlId="breedcontrol">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            name="breed"
            {...formik.getFieldProps('breed')}
            as="textarea"
            placeholder="Breed"
            rows="2"
          />
        </Form.Group>
        <fieldset>
          <Form.Group>
            <Form.Label className="mr-2">Gender</Form.Label>
            <Form.Check
              custom
              inline
              checked={!formik.values.sex}
              onChange={() =>
                formik.handleChange({
                  target: { name: 'sex', value: 0 },
                })
              }
              label="male"
              type="radio"
              id="gender-male-radio"
            />
            <Form.Check
              custom
              inline
              checked={formik.values.sex}
              onChange={() =>
                formik.handleChange({
                  target: { name: 'sex', value: 1 },
                })
              }
              label="female"
              type="radio"
              id="gender-female-radio"
            />
          </Form.Group>
        </fieldset>
        <Form.Group controlId="breedcontrol">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            {...formik.getFieldProps('description')}
            as="textarea"
            placeholder="Description"
            rows="2"
          />
        </Form.Group>
        <Row className="mb-1 mt-1">
          {formik.values.images.map(image => (
            <Col xs={6} key={image._id}>
              <EditImage src={image.url} alt="doggy" />
            </Col>
          ))}
          <Col>
            <EditImage src={addImage} alt="addImage" />
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
    <Card.Header className="text-right">
      <Button
        onClick={() => console.log('todo')}
        variant="link"
        className="p-0 text-danger"
      >
        Delete
      </Button>
    </Card.Header>
    <Card.Img variant="bottom" src={src} alt={alt} />
  </Card>
);

export default EditParentPage;
