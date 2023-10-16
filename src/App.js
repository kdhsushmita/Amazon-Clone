import Home from "./Components/Home";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
