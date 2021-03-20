import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import Container from "./components/Container";

import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/*" component={() => <Redirect to="/" />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Routes;
