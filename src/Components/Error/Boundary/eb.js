import React from 'react';

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(err){
    console.log(err);
    return { hasError: true };
  }

  componentDidCatch(err, errInfo){
    // log to somewhere
    console.log(err, errInfo);
  }

  // need to remove the error, otherwise when we go home the error is still there
  // and the error boundary will still show
  removeErrorAndGoHome = (cb) => {
    this.setState({
      hasError: false
    });
    cb();
  }

  render(){
    const { hasError } = this.state;
    const { 
      children, 
      fallback: Fallback 
    } = this.props;

    if(hasError){
      return Fallback 
        ? <Fallback
            removeErrorAndGoHome={this.removeErrorAndGoHome} /> 
        : <DefaultFallback
            removeErrorAndGoHome={this.removeErrorAndGoHome} />;
    }

    return children;
  }
}

const DefaultFallback = () => (
  <div>
    <h2>Whoops...</h2>
    Something went wrong...
  </div>
);

const withErrorBoundary = (Comp, fallback) => (props) => (
  <ErrorBoundary
    fallback={fallback}>
    <Comp {...props} />
  </ErrorBoundary>
);

// export default ErrorBoundary;
export default withErrorBoundary;