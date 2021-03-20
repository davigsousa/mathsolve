import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/*" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
