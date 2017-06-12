import React, { Component } from 'react';
import './Downloads.css';
import Download from '../Download/Download';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import * as downloadActions from '../../actions/downloads';

class Downloads extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
        <div className="container">
            <h2>Downloads</h2>
            <hr />
            {this.props.rows.map(row =>
                 <div className="row" key={this.props.rows.indexOf(row)}>
                    {row.map(download => {
                        return <div className="col-md-4" key={download}><Download version={download} key={download} /></div>
                    })}
                </div>
            )}
        </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(Downloads);