import React from "react";
import { useHistory } from 'react-router-dom';
import SentryFeedbackButton from '../SentryErrorForm';
import "./styles.css";

// The wrapper that goes around the entire app if it crashes
const EntireAppCatcher = ({ removeErrorAndGoHome, eventId }) => {
  const history = useHistory();
  function handleClick(){
    removeErrorAndGoHome(()=>{
      history.push('/');
    });
  }
  return (
    <div className="d-flex justify-content-center height-100">
      <div className="d-flex flex-wrap align-content-center">
        <div>
          <div>
            <h2>Whoops...</h2>
          </div>
          <div>
            <blockquote className="blockquote">
              <p className="mb-0">
                Something broke and I take full responsibiliy
              </p>
              <footer className="blockquote-footer">Brian</footer>
            </blockquote>
          </div>
          <div className="d-flex justify-content-center">
            <button 
              onClick={handleClick}
              className="btn btn-sm btn-success mr-1">Home</button>
            <SentryFeedbackButton 
              className='btn btn-sm btn-danger'
              eventId={eventId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntireAppCatcher;
