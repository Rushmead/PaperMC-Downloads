import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome, to PaperMC</h2>
        <hr/>
        <p>Est ullamco tempor elit est commodo ut qui esse.</p>
        <Link to="/about" className="btn btn-primary" style={{marginRight: 20}}>About</Link>
        <Link to="/downloads" className="btn btn-primary">Downloads</Link>
      </div>
      );
  }
}

export default Home;
