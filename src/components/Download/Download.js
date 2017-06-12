import React, { Component } from 'react';
import './Download.css';
import axios from 'axios';

class Download extends Component {
    constructor(props){
        super(props);
        this.state = {
            changelog: []
        }
        this.url = "https://ci.destroystokyo.com/job/PaperSpigot/" + this.props.version;
    }

    componentDidMount(){
        axios.get('/api/build/' + this.props.version).then(res => {
            var changelog = res.data.changelog;
            if(changelog.length > 3){
                changelog = changelog.splice(0, 3);
                changelog.push("Click below to see more!");
            }
            this.setState({changelog});
        });
    }

  render() {
    return (
        <div>
            <div className="panel panel-default">
  <div className="panel-heading">Version {this.props.version}</div>
  <div className="panel-body">
            <ul className="no-style">{this.state.changelog.map(change => {
                    return <li>{change}</li>
                })}</ul>
                <a href={this.url} className="btn btn-sm btn-success">View Download</a>
  </div>
</div>
        </div>
      );
  }
}

export default Download;
