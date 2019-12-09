import React from 'react';
import PropTypes from 'prop-types';
import UploadImage from '../Upload';
import EditGroup from '../EditGroup';

const EditListOfImages = ({
  onUpload,
  images,
  editImage,
  editImageFuncs,
}) => (
  <>
    <UploadImage cb={onUpload} />
    <EditGroup
      images={images}
      editImage={editImage}
      editImageFuncs={editImageFuncs}
    />
  </>
);
EditListOfImages.propTypes = {
  onUpload: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  editImage: PropTypes.func.isRequired, // the edit component
  editImageFuncs: PropTypes.object.isRequired, // the functions associated with the edit component
};

export default EditListOfImages;
