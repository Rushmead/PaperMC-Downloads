import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Downloads from '../Downloads/Downloads';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <nav className="navbar navbar-default navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">PaperMC</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/downloads">Downloads</Link></li>
      </ul>
    </div>
  </div>
</nav>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/downloads" component={Downloads} />
      </div>
    </Router>
      );
  }
}





export default App;
