import React, { Component } from 'react';
//import Game from '../Game/App';
import axios from 'axios';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    dd = (e) => {
        e.preventDefault();
        console.log('clicked');
        axios({
              url: '/Games/FirstGame/windows.zip',
              method: 'GET',
              responseType: 'blob'
        })
        .then((response) => {
            const url = window.URL
                    .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'windows.zip');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    };
    render() {
        return (
            <React.Fragment>
                       


                    <div className = 'gameContainer'>
                        <br/><playtime className= "play-time">IT'S TIME TO PLAY</playtime>
                        <br/>

                        <iframe className = 'game' src = "http://localhost:7000/Games/FirstGame/webGL/index.html" width = {1000} height = {700} allowFullScreen title = "blabla"></iframe>
                        
                        <br />
                        <button id= "dlbutton" className="downloadbutton" onClick={this.dd}> Download</button>
                    </div>
            </React.Fragment>
        )
    }
}