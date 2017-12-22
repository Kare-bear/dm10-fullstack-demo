import React from "react";
import { Switch, Route } from "react-router-dom";

// I'll write a function that returns JSX For a dummy route for testing.

function Test() {
  return <div>TEST PAGE!!</div>;
}

function OtherTest() {
  return <div>OTher Test Page</div>;
}

// after testing we see the routes work.

export default (
  <Switch>
    <Route exact path="/" component={OtherTest} />
    <Route path="/test" component={Test} />
  </Switch>
);
