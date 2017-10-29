import React, { Component } from 'react';

class PlayerData extends Component {

    render() {
        let typeOfData = this.props.entry.substring(this.props.entry.lastIndexOf(".") + 1,this.props.entry.length);
        let item =this.getitem(typeOfData)

        return (
        item
        );
    }

    getitem(typeOfData){
        switch (typeOfData){
            case 'png':
                return<li key={this.props.liKey}> {this.props.liKey}:
                        <input type="text" id={this.props.liKey} onChange={this.props.handleInputChange} name={this.props.liKey} value={this.props.entry}/>
                        <div>
                            <img src={this.props.entry}/>
                        </div>
                    </li>;
                break;
            case 'mp4':
                return <li key={this.props.liKey}> {this.props.liKey}:
                    <input type="text" id={this.props.liKey} onChange={this.props.handleInputChange} name={this.props.liKey} value={this.props.entry}/>
                    <div>
                        <embed src={this.props.entry} allowfullscreen="true" width="425" height="344"/>
                    </div>

                </li>;
            default:
                return <li key={this.props.liKey}> {this.props.liKey}: <input type="text" id={this.props.liKey} onChange={this.props.handleInputChange} name={this.props.liKey} value={this.props.entry}/></li>;

        }
    }
}

export default PlayerData;

