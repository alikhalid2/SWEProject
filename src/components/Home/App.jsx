import React, { Component } from 'react';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div class="sameline ">
            <form>
              <select id="select">
        <option id="all game">All Game</option>
        <option id="latest game" >Latest Game</option>
        <option id="coming soon" >Coming Soon</option>
        <option id="star war" >Star War </option>
        <option id="sports" > Sports</option>
      </select>
            </form>
          </div>   
        );
    }
}