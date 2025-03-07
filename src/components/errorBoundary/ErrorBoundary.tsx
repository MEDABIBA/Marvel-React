import { Component, ReactNode } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";

interface ErrorBoundaryProps {
  children: React.ReactNode; // Children can be anything renderable in React (chatGPT)
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    error: false,
  };
  componentDidCatch(error: Error, infoError: React.ErrorInfo) {
    console.log(error, infoError);
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
