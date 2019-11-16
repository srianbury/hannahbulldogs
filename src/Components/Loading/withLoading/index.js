import React from 'react';
import { DefaultError, DefaultLoading } from '../Defaults';

// Component props:
// loading (list) typically the data to be displayed,
//   by passing it via loading can name the data whatever we want *required
// error (Error) Error object
// LoadingFallback (Component) component to show when data is loading
// EmptyFallback (Component) component to show when the data is empty
// ErrorFallback (Component) component to show when there is an error
const withLoading = Component => props => {
  const {
    loading,
    error,
    ErrorFallback,
    LoadingFallback,
    EmptyFallback,
    ...rest
  } = props;
  if (error) {
    return (
      <>
        {ErrorFallback ? (
          <ErrorFallback error={error} />
        ) : (
          <DefaultError error={error} />
        )}
      </>
    );
  }

  if (loading === null) {
    return (
      <>
        {LoadingFallback ? <LoadingFallback /> : <DefaultLoading />}
      </>
    );
  }

  return <Component {...rest} />;
};

export default withLoading;
