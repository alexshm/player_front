import React, { Component } from 'react';
import './Node.css';
import {getPath} from './utils'

class Node extends Component {

    deepDisplay(playerData) {
        var newItems = [];
        for (var key in playerData) {
            if (playerData.hasOwnProperty(key)) {
                newItems.push(this.checker(playerData[key], key));
            }
        }
        return newItems
    }

    constructor(props) {
        super(props);
        //let flatNode= flattenObject(props.node);
        this.state = this.props.node;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let path ="";
        //_.find(this.state, { 'name' });
        console.log(name ,value);
        console.log(path);
        //this.setState({
        //    [name]: value
        //});
        this.setState({ [event.target.id]: event.target.value });
    }

    checker(entry, liKey) {
        if (liKey === "id") {
            return;
        }
        if (liKey === "player_highlights") {
            return <ul key={liKey}>
                <li > {liKey}: <input type="text" id={liKey} onChange={this.handleInputChange}/> </li>
            </ul>;
        }
        //console.log(liKey);
        //console.log(entry);
        switch (typeof entry) {
            case 'object':
                return <ul key={liKey}> {liKey}: {this.deepDisplay(entry)} </ul>;
            case 'list':
                return <ul key={liKey}> {liKey}: {this.deepDisplay(entry)} </ul>;
            case 'number':
                return <li key={liKey}> {liKey}: <input name={liKey} id={liKey} type="number" onChange={this.handleInputChange} value={entry}/> </li>;
            case 'string':
                return <li key={liKey}> {liKey}: <input type="text" id={liKey} onChange={this.handleInputChange} name={liKey} value={entry}/></li>;
            default : return;
        }
    }


    render() {
        return (
            <div>
                {this.deepDisplay(this.state)}
            </div>
        );
    }
}

export default Node;

