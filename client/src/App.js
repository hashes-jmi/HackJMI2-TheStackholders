import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //eslint-disable-line import/named, import/namespace
import SearchParams from "./SearchParams";
// Sentry.init({
//   dsn:
//     "https://6893a9fd96404de4b38fa1516ad1a234@o1009184.ingest.sentry.io/5973209",
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });
const App = () => {
  const theme = useState("blue");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background: "#E0FBFC",
        }}
      >
        <Router>
          <header className="w-full mb-10 bg-gray-700 text-center p-7">
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
