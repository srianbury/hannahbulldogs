import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../Context';
import {
  Container,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Spinner,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import withLoading from '../../Loading/withLoading';
import DatePicker from 'react-datepicker';
import { DATA } from '../../../Constants';
import EditListOfImages from '../../Images/Edit';
import sentryLogger from '../../../Functions/Logger';
// import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { makeToast } from '../../Notifications';
import { diffPost } from '../../../Functions/Crud';
import _ from 'lodash';
import { AuthUserContext } from '../../Authentication';
import { EditLitterImage } from '../../Images/EditImageComponents';

const EditLitterPageLogic = ({ match }) => {
  const { id } = match.params;
  const { getLitter, updateLitters, readHome } = useContext(
    DataContext,
  );
  const { authUser } = useContext(AuthUserContext);
  const litter = getLitter(id);

  async function onSubmit(values, { setSubmitting }) {
    try {
      const diff = diffPost(litter, values);
      if (!_.isEmpty(diff)) {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/litters/${id}`,
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
          updateLitters(result.data);
          readHome(); // reload the data on the homepage to reset the images in the carousel
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

  function onUpload(newImage) {
    formik.setFieldValue('images', [
      ...formik.values.images,
      { url: newImage, useForHomepage: true },
    ]);
  }

  function onRemoveImage(url) {
    const updatedImages = formik.values.images.filter(
      image => image.url !== url, // using url because if we just uploaded the image it wont have an ID
    );
    formik.setFieldValue('images', updatedImages);
  }

  function handleParentSelection(parent, value) {
    const parentKey = parent ? 'mom' : 'dad';
    formik.setFieldValue('parents', {
      ...formik.values.parents,
      [parentKey]: value,
    });
  }

  const formik = useFormik({
    initialValues: litter,
    onSubmit,
  });

  function homepageIsChecked(url) {
    const image = formik.values.images.find(img => img.url === url);
    return image.useForHomepage;
  }

  // toggle the useForHomepage options
  function handleShow(url) {
    const nextState = formik.values.images.map(image => {
      if (image.url === url) {
        return { ...image, useForHomepage: !image.useForHomepage };
      } else {
        return image;
      }
    });
    formik.setFieldValue('images', nextState);
  }

  return (
    <EditLitterPageView
      formik={formik}
      handleParentSelection={handleParentSelection}
      handleUpload={onUpload}
      handleRemove={onRemoveImage}
      homepageIsChecked={homepageIsChecked}
      handleShow={handleShow}
    />
  );
};

const EditLitterPageView = ({
  formik,
  handleParentSelection,
  handleUpload,
  handleRemove,
  homepageIsChecked,
  handleShow,
}) => (
  <Container>
    <h5>Edit</h5>
    <Form onSubmit={formik.handleSubmit}>
      <ParentDropDownLogic
        parentGender={true}
        value={formik.values.parents.mom}
        handleSelection={name => handleParentSelection(true, name)}
      />

      <ParentDropDownLogic
        parentGender={false}
        value={formik.values.parents.dad}
        handleSelection={name => handleParentSelection(false, name)}
      />

      <Form.Group controlId="birthday">
        <Form.Label>Birthday</Form.Label>
        <div>
          <DatePicker
            className="form-control"
            selected={new Date(formik.values.birthday)}
            onChange={date => formik.setFieldValue('birthday', date)}
          />
        </div>
      </Form.Group>

      <EditListOfImages
        onUpload={handleUpload}
        images={formik.values.images}
        editImage={EditLitterImage}
        editImageFuncs={{
          handleRemove,
          homepageIsChecked,
          handleShow,
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

const ParentDropDownLogic = ({
  parentGender,
  value,
  handleSelection,
}) => {
  const { data, readParents } = useContext(DataContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!data[DATA.PARENTS]) {
      readParents(() => setError(new Error('Failed to fetch.')));
    }
  }, [data, readParents]);

  return (
    <ParentDropDownViewWithLoading
      loading={data[DATA.PARENTS]}
      error={error}
      parents={
        data[DATA.PARENTS] &&
        data[DATA.PARENTS]
          .filter(p => p.sex === parentGender)
          .map(p => p.name)
      }
      parentGender={parentGender}
      value={value}
      handleSelection={handleSelection}
    />
  );
};

const ParentDropDownView = ({
  parentGender,
  parents,
  value,
  handleSelection,
}) => (
  <Form.Group>
    <Form.Label>{parentGender ? 'Mom' : 'Dad'}</Form.Label>
    <DropdownButton
      id={`${parentGender ? 'mom' : 'dad'}parentDropdown`}
      title={value}
    >
      {parents.map(parentName => (
        <Dropdown.Item
          key={parentName}
          onClick={() => handleSelection(parentName)}
        >
          {parentName}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  </Form.Group>
);
const ParentDropDownViewWithLoading = withLoading(ParentDropDownView);

export default EditLitterPageLogic;
