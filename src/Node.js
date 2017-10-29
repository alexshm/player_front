import React, { Component } from 'react';
import './Node.css';
import {changeObjectState} from './utils';
import PlayerData from './PlayerData';
import axios from 'axios';

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
        this.state = this.props.node;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let copy = Object.assign({}, this.state);
        let beforeValue = value.substring(0, value.length - 1);
        console.log(beforeValue);
        changeObjectState(name,value,copy,beforeValue);
        this.setState(copy);
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
        switch (typeof entry) {
            case 'object':
                return <ul key={liKey}> {liKey}: {this.deepDisplay(entry)} </ul>;
            case 'list':
                return <ul key={liKey}> {liKey}: {this.deepDisplay(entry)} </ul>;
            case 'number':
                return <li key={liKey}> {liKey}: <input name={liKey} id={liKey} type="number" onChange={this.handleInputChange} value={entry}/> </li>;
            case 'string':
                return <PlayerData key={liKey} liKey={liKey} entry ={entry} handleInputChange ={this.handleInputChange}/>
            default : return;
        }
    }


    render() {
        return (
            <div>
                {this.deepDisplay(this.state)}
                <button className="button" onClick={this.handleSave}>Save</button>
            </div>
        );
    }

    handleSave(event) {
        axios.post('https://nodesenior.azurewebsites.net/player/'+this.state['id'] ,this.state)
            .then((response )=> {
            console.log(response);
        })
            .catch(error => console.log(error.response));
    }
}

export default Node;

