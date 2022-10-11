import React, { Component, ErrorInfo, ReactNode } from "react";
import Warning from "./Warning";

interface Props {
  children?: ReactNode;
}

interface State {
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined, errorInfo: undefined };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  public render() {
    if (this.state.errorInfo) {
      return <Warning errorInfo={this.state.errorInfo} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
