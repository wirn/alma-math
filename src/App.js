// import React from 'react';
import './App.css';
import Tasks from './components/tasks';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container container-main">
        <nav className="navbar navbar-expand-md navbar-light">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Nivå 1</Link>
              </li>
              <li className="nav-item">
                <Link to="/levelTwo" className="nav-link">Nivå 2</Link>
              </li>
              <li className="nav-item">
                <Link to="/levelThree" className="nav-link">Nivå 3</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Tjosan</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/levelTwo">
            <Tasks level={2} />
          </Route>
          <Route path="/levelThree">
            <Tasks level={3} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Tasks level={1} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const About = () => {
  return <h2>Almas matteland är bla bla..</h2>;
}