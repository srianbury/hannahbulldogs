import * as Sentry from '@sentry/browser';

function sentryLogger(error) {
  try {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error);
    } else {
      console.log(error);
    }
  } catch {}
}

export default sentryLogger;
