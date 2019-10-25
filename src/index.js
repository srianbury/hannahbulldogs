import React from 'react';
import * as Sentry from '@sentry/browser';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

if(process.env.NODE_ENV==='production'){
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_URL });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
