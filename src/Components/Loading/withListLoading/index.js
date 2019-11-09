import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import EmptyList from '../Empty';


// Component props:
// loading (list) typically the data to be displayed, 
//   by passing it via loading can name the data whatever we want *required
// error (Error) Error object
// LoadingFallback (Component) component to show when data is loading
// EmptyFallback (Component) component to show when the data is empty
// ErrorFallback (Component) component to show when there is an error
const withListLoading = (Component) => (props) => {
    const { loading, error, ErrorFallback, LoadingFallback, EmptyFallback, ...rest } = props;
    if(error){
        return(
            <>{ErrorFallback
                ? <ErrorFallback error={error} />
                : <DefaultError error={error} />            
            }</>
        );
    }

    if(loading===null){
        return(
            <>{LoadingFallback
                ? <LoadingFallback />
                : <DefaultLoading />
            }</>
        );
    }

    if(loading.length===0){
        return(
            <>{EmptyFallback
                ? <EmptyFallback />
                : <EmptyList />
            }</>
        );
    }

    return(
        <Component {...rest} />
    );
};

const DefaultError = ({ error }) => {
    return (
        <div className='text-danger'>{error.message}</div>
    );
}
DefaultError.propTypes = {
    error: PropTypes.instanceOf(Error)
}

const DefaultLoading = () => (
    <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
);

export default withListLoading;
export { DefaultLoading, DefaultError };
