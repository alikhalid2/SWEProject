import React, { Component } from 'react';
//import Game from '../Game/App';
import axios from 'axios';
import './App.scss';
import $ from 'jquery';


function setRatingValue(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var width = rect.right - rect.left; // element width
    var rate = Math.round(((x*10)/width))/2
    $(this).attr('data-rated', rate);
  }

$(document).on('click','.hb-ratingbar', setRatingValue)


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
                       

                    <div className = 'grid-container'>
                        <div className = 'gameContainer'>
                            <h1 className= "play-time">IT'S TIME TO PLAY</h1>

                            <iframe className = 'game' src = "http://localhost:7000/Games/FirstGame/webGL/index.html" width = {1000} height = {700} allowFullScreen title = "blabla"></iframe>
                            
                            <button id= "dlbutton" className="downloadbutton" onClick={this.dd}> Download</button>
                        </div>
                        <div className = 'gameContentContainer'>
                            <h4>Description</h4>
                            <p>hello, I am the game content containerhello, I am the game content containerhello, I am the game content containerhello,</p>
                        </div>
                        <div className = 'rateContainer'>
                            <h2 style = {{color: 'cyan'}}>Rate Me!</h2>
                            <div className="hb-ratingbar" data-rated="2.5">
                            <i className="unfilled"></i>
                            <i className="filled"></i>
                            <svg className="cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" preserveAspectRatio="none" fill="currentColor"><path d="M0 0v50h250V19l-12 13 3 18-16-9-15 9 3-18-13-13-12 13 3 18-16-9-15 9 3-18-13-13-12 13 3 18-16-9-15 9 3-18-13-13-12 13 3 18-16-9-15 9 3-18-13-13-12 13 3 18-16-9-15 9 3-18L0 19l17-3 8-16Zm50 19 17-3 8-16H25l8 16zm50 0 17-3 8-16H75l8 16zm50 0 17-3 8-16h-50l8 16zm50 0 17-3 8-16h-50l8 16zm25-19 8 16 17 3V0Z"/></svg>

                            </div>

                        </div>
                    </div>
            </React.Fragment>
        )
    }
}