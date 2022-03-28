import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-4 text-center">
          <h1 className="text-xl font-medium">Something went wrong</h1>
          <a
            href="/"
            className="block mt-6 rounded-md bg-blue-500 px-3 py-2 text-white"
          >
            Go back
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
