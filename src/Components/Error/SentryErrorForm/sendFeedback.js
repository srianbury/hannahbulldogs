import React from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';


const SentryFeedbackButton = ({ eventId, className }) => (
    <button 
        className={className ? className : 'btn btn-sm btn-danger'}
        onClick={() => Sentry.showReportDialog({ eventId })}>
        Report feedback
    </button>
);
SentryFeedbackButton.propTypes = {
    eventId: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default SentryFeedbackButton;