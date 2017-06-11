import React, { Component } from 'react';
import './Download.css';
import axios from 'axios';

class Download extends Component {
    constructor(props){
        super(props);
        this.state = {
            changelog: ""
        }
    }

    componentDidMount(){
        axios.get('https://ci.destroystokyo.com/job/PaperSpigot/${this.props.version}/api/json?pretty=true').then(res => {
            const changelog = res.data.data.changeSet.items[0].msg;
            this.setState({changelog});
        });
    }

  render() {
    return (
        <div>
            <div className="panel panel-default">
  <div className="panel-heading">Version {this.props.version}</div>
  <div className="panel-body">
            <p>Changelog: {this.props.changelog}</p>
      <a href="https://ci.destroystokyo.com/job/PaperSpigot/${this.props.version}" className="btn btn-sm btn-success">Download</a>
  </div>
</div>
        </div>
      );
  }
}

export default Download;
