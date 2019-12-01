import moment from 'moment';
/**
 * Consistent date formatting
 *
 * @param {String|Date} date
 * @returns {} date formatted as Feb. 29th 1996
 */
function formatDate(date) {
  return moment(date).format('MMM Do YYYY');
}

export default formatDate;
