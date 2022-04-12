import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <img src = {this.props.game.thumnail} alt = {this.props.game.name}></img>
        )
    }
}