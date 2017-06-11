import React, { Component } from 'react';
import './Downloads.css';
import Download from '../Download/Download';
import axios from 'axios';

class Downloads extends Component {
    constructor(props){
        super(props);
        this.state = {
            rows: []
        }
    }

    chunk(array, length){
        if(!array.length){
            return [];
        }
        return [ array.slice(0, length)].concat(this.chunk(array.slice(length), length));
    }

    componentDidMount(){
        axios.get('https://ci.destroystokyo.com/job/PaperSpigot/api/json?pretty=true').then(res => {
            const downloads = res.data.data.builds;
            var chunked = this.chunk(downloads, 3);
            var rows = [];
            for(var i = 0; i < chunked.length; i++){
                rows.push(chunked[i]);
            }
            this.setState({rows});
        });
    }



  render() {
    return (
      <div className="container">
        <h2>Downloads</h2>
        <hr />
        {this.state.rows.map(row =>
            <div className="row">
                {row.map(download => {
                    <Download version={download.version}/>
                })}
            </div>
          )}
      </div>
      );
  }
}

export default Downloads;
