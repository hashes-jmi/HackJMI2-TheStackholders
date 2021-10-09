import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import * as Sentry from "@sentry/browser";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    // error: "",
    // info: "",
    // eventID: "",
    redirect: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    // Sentry.withScope((scope) => {
    //   scope.setExtras(info);
    //   const eventId = Sentry.captureException(error);
    //   this.setState({ eventId, info });
    // });
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <div>
          <h2>
            this listing has an eror <Link to="/">click here</Link> to go back
            to the home page or wait 5 seconds
          </h2>
          <p>nothing can prevent bugs. We are helpless here. We are human </p>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
