import React, { Component } from 'react';

class PlayerData extends Component {

    render() {
        return (
            <li key={this.props.liKey}> {this.props.liKey}: <input type="text" id={this.props.liKey} onChange={this.props.handleInputChange} name={this.props.liKey} value={this.props.entry}/></li>
        );
    }
}

export default PlayerData;

