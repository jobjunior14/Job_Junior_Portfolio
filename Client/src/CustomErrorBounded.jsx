import { Component } from "react";

const withErrorBoundary = (WrappedCom, ErrorComp) => {
  return class CustomErrorBounded extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        errorMessage: "",
      };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, errorMessage: error.toString() };
    }

    componentDidCatch(error, errorInfo) {
      console.error("Error caught", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <ErrorComp />;
      }

      return <WrappedCom {...this.props} />;
    }
  };
};

export default withErrorBoundary;
