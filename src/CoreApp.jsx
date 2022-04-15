// handling react
import React, { Component } from 'react';

// handling the components
import Login from "./components/login/App";
import Header from './components/Header/App';
import Footer from './components/Footer/App';
import GameAdding from './components/GameAdding/App';
import GamePlay from './components/GamePlay/App';
import Home from './components/Home/App';
// handling api file to get our custom apis
import api from './components/api.js';

// handling router module
import { Navigate, Route, Routes} from 'react-router-dom';



// handling Core App details
export default class CoreApp extends Component{
    // defining the constructor of the Core App
    constructor (props){
        super(props);
        this.state = {
            username: '',
            games: [],
        };
        
        
    };
    
    // initializing the state
    async componentDidMount() {
        
        const loginner = await api.loginInfo();
        console.log(loginner.username);
        this.setState({username: loginner.username})

        const games = await api.gameInfo();
        console.log(games);
        this.setState({games: games});

    }

    // handling loging process
    loginHandler = async (username) => {
        const previousState = this.state;

        this.setState({username: username})
        console.log(this.state);
        try{
            await api.setLogin(username)
        }
        catch{
            this.setState(previousState);
        }
    };

    // handling logout process
    logoutHandler = async (username) => {
        //const previousState = this.state;
        this.setState({username: ''})
        console.log(this.state);
        try {
            await api.setLogout(username);
        }
        catch(err){
            console.log(err);
        }
    }
    
    doStyle = () => {
        const gridContainer = document.querySelector('.game-list');
        let gameLength = Object.keys(this.state.games).length;
        let templateArea = "";
        let modulus = gameLength % 3;
        if (modulus !== 0){
            gameLength += 3 - modulus;
        }
        for(let i = 1; i <= gameLength; i += 3){
            templateArea += `'${i} ${i + 1} ${i + 2}' `;
        }
        
        gridContainer.style.cssText = `display: grid; grid-template-areas: ${templateArea}; grid-template-columns: auto auto auto; gap: 2em; padding-right: 3em;`;
    
    };
    // Render components for the page
    render() {
       // window.onpopstate = this.doStyle;
        // return of the render
        return (
            
            <React.Fragment>
                {/* Header component */}
                <Header user = {this.state.username} 
                        onLogout = {this.logoutHandler}/>
                    
                {/* Inner Page */}
                <Routes>
                    {/* The Root Path */}
                    <Route path = '/*' element = {<Home games = {this.state.games} instanceStyle = {this.doStyle} />} />
                    
                    {/* The Login Path */}
                    {this.state.username? <Route    path = '/login' 
                                                    element = {<Navigate to = '/' replace />} /> 
                        : <Route    path = '/login' 
                                    element = {<Login   user = {{...this.state}}
                                                        onLogin = {this.loginHandler}    
                                
                    />} />}

                    {/* Adding Game Path */}
                    <Route path = '/gameadding' element = {<GameAdding />}/>
                    <Route path = '/gameplay/:gameNumber' element = {<GamePlay isUserActive = {this.state.username}games = {this.state.games}/>} />
                
                </Routes>
                {/* Footer component */}
                <Footer />
                </React.Fragment>
            );
    }
}