import "./App.scss";

import Nav from "./components/nav/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/search";
import Detail from "./pages/detail/detail";
import History from "./pages/history/history";

function App() {
  return (
    <Router>
      <img
        className="bgimg"
        src="https://cdn.pixabay.com/photo/2020/09/11/00/06/spiderman-5561671_960_720.jpg"
      />
      <div className="App">
        <Nav />

        <div className="wrapper">
          <Switch>
            <Route path="/history/">
              <History />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/search/:key">
              <Search />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
