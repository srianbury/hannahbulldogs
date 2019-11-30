import React from 'react';
import { DefaultError, DefaultLoading } from '../Defaults';
import EmptyList from '../Empty';

// Component props:
// loading (list) typically the data to be displayed,
//   by passing it via loading can name the data whatever we want *required
// error (Error) Error object
// LoadingFallback (Component) component to show when data is loading
// EmptyFallback (Component) component to show when the data is empty
// ErrorFallback (Component) component to show when there is an error
const withListLoading = Component => props => {
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

  if (loading === null || loading === undefined) {
    return (
      <>
        {LoadingFallback ? <LoadingFallback /> : <DefaultLoading />}
      </>
    );
  }

  if (loading.length === 0) {
    return <>{EmptyFallback ? <EmptyFallback /> : <EmptyList />}</>;
  }

  return <Component {...rest} />;
};

export default withListLoading;
export { DefaultLoading, DefaultError };
