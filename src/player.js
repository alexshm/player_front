import React, { Component } from 'react';
import './player.css';
import Node from './Node.js'
import axios from 'axios';

class Player extends Component {

    componentDidMount() {
        this.getData();
    }

    getPlayer(playersList) {
        console.log(playersList);
        if (playersList.length > 0) {
            let id = playersList[0];
            axios.get('https://nodesenior.azurewebsites.net/player/' + id)
                .then(res => {
                    const player = res.data;
                    this.setState({player: player})
                })
                .catch(error => console.log(error.response));
        }

    }

    getData() {
        axios.get('https://nodesenior.azurewebsites.net/player/all')
            .then(res => {
                this.getPlayer(res.data);
            })
            .catch(error => console.log(error.response));
    }

    render() {
        let node = <Node node={this.state.player}/>;
        return (
            this.state.player ?
                <div>
                    {node}
                </div> : <div>Loadding...</div>
        );
    }

    constructor() {
        super();
        this.state = {};
    }


}

export default Player;
