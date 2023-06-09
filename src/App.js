import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from "./pages/Home";
import Office from "./pages/Office";
import Info from "./pages/Info";
import Location from "./pages/Location";
import Amenities from "./pages/Amenities";
import Discover from "./pages/Discover";
import Contact from "./pages/Contact";




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
              <Route path="/location">
                  <Location />
              </Route>
              <Route path="/amenities">
                  <Amenities />
              </Route>
              <Route path="/discover">
                  <Discover />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
