import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => (
  <ToastContainer />
);

/**
 * @param {string} message
 * @param {('info'|'success'|'warning'|'error'|'default'})} type (one of TOAST_TYPES)
 */
function makeToast(message, type){
  toast[type](message, TOAST_OPTIONS);
}

const TOAST_OPTIONS = {
  position: "bottom-center",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const TOAST_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
};

makeToast.TYPES = TOAST_TYPES;
export default Notifications;
export { makeToast };
