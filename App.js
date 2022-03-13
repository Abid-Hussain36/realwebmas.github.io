import NavBar from "./NavBar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExHall from "./ExHall";
import CuisineIcons from "./CuisineIcons";
import Trivia from "./Trivia";
import AsiaShow from "./AsiaShow";
import NAmericaShow from "./NAmericaShow";
import SAmericaShow from "./SAmericaShow";
import EuroShow from "./EuroShow";
import AfricaShow from "./AfricaShow";
import AussieShow from "./AussieShow";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/ex">
              <ExHall/>
            </Route>
            <Route path="/cuis">
              <CuisineIcons/>
            </Route>
            <Route path="/tr">
              <Trivia/>
            </Route>
            <Route path="/namerica-s">
              <NAmericaShow/>
            </Route>
            <Route path="/europe-s">
              <EuroShow/>
            </Route>
            <Route path="/asia-s">
              <AsiaShow/>
            </Route>
            <Route path="/samerica-s">
              <SAmericaShow/>
            </Route>
            <Route path="/africa-s">
              <AfricaShow/>
            </Route>
            <Route path="/australia-s">
              <AussieShow/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
