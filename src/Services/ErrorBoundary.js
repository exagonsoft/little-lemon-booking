import React from 'react';
import { Error } from '../assets/images';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto animate-fade-in">
            <img
              src={Error}
              alt="Error Illustration"
              className="w-24 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-red-500 mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-700 mb-4">
              We encountered an unexpected error. Please try refreshing the page or come back later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
