import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { AuthUserContext } from '../../Authentication';
import { makeToast } from '../../Notifications';
import sentryLogger from '../../../Functions/Logger';

const UploadImage = ({ cb }) => {
  const [uploading, setUploading] = useState(false);
  const { authUser } = useContext(AuthUserContext);

  async function uploadImage(e) {
    try {
      setUploading(true);
      const file = e.target.files[0];
      const formBody = new FormData();
      formBody.append('images', file);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/images`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authUser.token}`,
          },
          body: formBody,
        },
      );
      const result = await response.json();
      const newImage = result.result[0].url;
      cb(newImage);
    } catch (e) {
      makeToast(
        'There was an error uploading your image.',
        makeToast.TYPES.ERROR,
      );
      sentryLogger(e);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {uploading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <input
          type="file"
          name="images"
          accept="image/png, image/jpeg"
          value={''}
          onChange={uploadImage}
        />
      )}
    </div>
  );
};
UploadImage.propTypes = {
  cb: PropTypes.func.isRequired,
};

export default UploadImage;
