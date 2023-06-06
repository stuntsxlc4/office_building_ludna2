import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from "./pages/Home";
import Office from "./pages/Office";
import Info from "./pages/Info";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/office">
                  <Office />
              </Route>
              <Route path="/info">
                  <Info />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
