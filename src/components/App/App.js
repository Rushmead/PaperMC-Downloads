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
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import * as downloadActions from '../../actions/downloads';

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

      chunk(array, length){
        if(!array.length){
            return [];
        }
        return [ array.slice(0, length)].concat(this.chunk(array.slice(length), length));
    }

    componentDidMount(){
            axios.get('/api/downloads').then(res => {
                const downloads = res.data;
                var chunked = this.chunk(downloads, 3);
                var rows = [];
                for(var i = 0; i < chunked.length; i++){
                    rows.push(chunked[i]);
                }
                this.props.actions.addToDownloads(rows);
            });
        }
}




function mapStateToProps(state, props) {
    return {
        rows: state.rows
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(downloadActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);