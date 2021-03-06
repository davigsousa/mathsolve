import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import Container from "./components/Container";

import Home from "./pages/Home";
import Solve from "./pages/Solve";

function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/solve" component={Solve} />

          <Route exact path="/*" component={() => <Redirect to="/" />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Routes;
