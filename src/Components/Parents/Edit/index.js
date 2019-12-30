import React, { useContext } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import withAuthorizationHOC from '../../Authorization';
import { AuthUserContext } from '../../Authentication';
import { makeToast } from '../../Notifications';
import _ from 'lodash';
import * as yup from 'yup';
import { DataContext } from '../../Context';
import sentryLogger from '../../../Functions/Logger';
import DatePicker from 'react-datepicker';
// import UploadImage from '../../Images/Upload';
// import EditGroup from '../../Images/EditGroup';
import EditListOfImages from '../../Images/Edit';
import { diffPost } from '../../../Functions/Crud';
import { EditImage } from '../../Images/EditImageComponents';
import 'react-datepicker/dist/react-datepicker.css';

const EditParentBase = ({ data }) => {
  const { authUser } = useContext(AuthUserContext);
  const { updateParents } = useContext(DataContext);
  const { _id } = data;
  const initialValues = data;
  const validationSchema = yup.object({
    name: yup.string().required('Name is required.'),
  });
  async function onSubmit(values, { setSubmitting }) {
    try {
      const diff = diffPost(data, values);
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
      } else {
        makeToast('No changes detected.', makeToast.TYPES.INFO);
      }
    } catch (error) {
      makeToast(
        'An unexpected error occurred...',
        makeToast.TYPES.ERROR,
      );
      sentryLogger(error);
    } finally {
      setSubmitting(false);
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  async function handleUpload(newImage) {
    formik.setFieldValue('images', [
      ...formik.values.images,
      { url: newImage },
    ]);
  }
  function handleRemove(url) {
    const updatedImages = formik.values.images.filter(
      image => image.url !== url, // using url because if we just uploaded the image it wont have an ID
    );
    formik.setFieldValue('images', updatedImages);
  }

  return (
    <Container>
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
          <div>
            <DatePicker
              className="form-control"
              selected={new Date(formik.values.birthday)}
              onChange={date =>
                formik.handleChange({
                  target: { name: 'birthday', value: date },
                })
              }
            />
          </div>
          {formik.touched.birthday && formik.errors.birthday && (
            <div className="text-danger">
              {formik.errors.birthday}
            </div>
          )}
        </Form.Group>
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
        <EditListOfImages
          onUpload={handleUpload}
          images={formik.values.images}
          editImage={EditImage}
          editImageFuncs={{
            handleRemove,
          }}
        />
        <Button
          type="submit"
          size="sm"
          variant="primary"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <Spinner
              as="span"
              animation="grow"
              role="status"
              size="sm"
              aria-hidden="true"
            />
          ) : (
            'Update'
          )}
        </Button>
      </Form>
    </Container>
  );
};
const EditWithAuthorization = withAuthorizationHOC(EditParentBase);

const EditParentPage = props => {
  const { getParent } = useContext(DataContext);
  const { id } = props.match.params;
  const data = getParent(id);
  return (
    <EditWithAuthorization editAccess={data.editAccess} data={data} />
  );
};

export default EditParentPage;
