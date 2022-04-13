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
            games: {
                1: {
                    name: '2D platformer',
                    thumnail: 'http://localhost:3000/Games/1/Screenshots/Screenshot_677x423_8.png',
                    categories: ['platform', 'adventure', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 1 on the server.',
                    path: 'http://localhost:3000/Games/1/',
                },
                2: {
                    name: '2D shooter',
                    thumnail: 'http://localhost:3000/Games/2/Screenshots/Screenshot_1904x891_12.png',
                    categories: ['shooter', 'action', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 2 on the server.',
                    path: 'http://localhost:3000/Games/2/',
                },
                3: {
                    name: '3D platformer',
                    thumnail: 'http://localhost:3000/Games/3/Screenshots/Screenshot_1920x907_14.png',
                    categories: ['platform', 'action', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 3 on the server.',
                    path: 'http://localhost:3000/Games/3/',
                    
                },
                4: {
                    name: '3D shooter',
                    thumnail: 'http://localhost:3000/Games/4/Screenshots/Screenshot_1132x483_9.png',
                    categories: ['shooter', 'adventure', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 4 on the server.',
                    path: 'http://localhost:3000/Games/4/',
                },
                5: {
                    name: 'space astronout',
                    thumnail: 'http://localhost:3000/Games/5/Screenshots/Screenshot_484x185_4.png',
                    categories: ['platform', 'adventure', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 5 on the server.',
                    path: 'http://localhost:3000/Games/5/',

                },
                6: {
                    name: 'space blaster',
                    thumnail: 'http://localhost:3000/Games/6/Screenshots/Screenshot_528x268_2.png',
                    categories: ['shooter', 'action', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 6 on the server.',
                    path: 'http://localhost:3000/Games/6/',

                },
                7: {
                    name: 'insect planet',
                    thumnail: 'http://localhost:3000/Games/7/Screenshots/Screenshot_460x192_7.png',
                    categories: ['shooter', 'adventure', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 7 on the server.',
                    path: 'http://localhost:3000/Games/7/',

                },
                9: {
                    name: 'planet shooter',
                    thumnail: 'http://localhost:3000/Games/9/Screenshots/2021-10-07 (11).png',
                    categories: ['shooter', 'action', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 9 on the server.',
                    path: 'http://localhost:3000/Games/9/',

                },
                8: {
                    name: 'space-stronaut 64',
                    thumnail: 'http://localhost:3000/Games/8/Screenshots/Screenshot_507x257_5.png',
                    categories: ['platform', 'adventure', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 8 on the server.',
                    path: 'http://localhost:3000/Games/8/',

                },
                10: {
                    name: 'the astronaut adventure',
                    thumnail: 'http://localhost:3000/Games/10/Screenshots/Screenshot_1920x907_1.png',
                    categories: ['platform', 'adventure', 'action', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 10 on the server.',
                    path: 'http://localhost:3000/Games/10/',

                },
                11: {
                    name: '2D space conquer',
                    thumnail: 'http://localhost:3000/Games/11/Screenshots/photo_2022-04-13_21-56-16.jpg',
                    categories: ['shooter', 'action', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 11 on the server.',
                    path: 'http://localhost:3000/Games/11/',

                },
                12: {
                    name: 'mars tower',
                    thumnail: 'http://localhost:3000/Games/12/Screenshots/5.PNG',
                    categories: ['shooter', 'adventure', 'action', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 12 on the server.',
                    path: 'http://localhost:3000/Games/12/',

                },
                13: {
                    name: 'astra',
                    thumnail: 'http://localhost:3000/Games/13/Screenshots/Screenshot_1920x907_31.png',
                    categories: ['platform', 'adventure', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 13 on the server.',
                    path: 'http://localhost:3000/Games/13/',

                },
                14: {
                    name: 'mars invasion',
                    thumnail: 'http://localhost:3000/Games/14/Screenshots/Screen.png',
                    categories: ['shooter', 'action', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 14 on the server.',
                    path: 'http://localhost:3000/Games/14/',

                },
                15: {
                    name: 'space station adventure',
                    thumnail: 'http://localhost:3000/Games/15/Screenshots/cover.jpg',
                    categories: ['platform', 'adventure', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 15 on the server.',
                    path: 'http://localhost:3000/Games/15/',

                },
                16: {
                    name: 'the space adventure',
                    thumnail: 'http://localhost:3000/Games/16/Screenshots/Screenshot_1920x1080_13.png',
                    categories: ['shooter', 'action', '2D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 16 on the server.',
                    path: 'http://localhost:3000/Games/16/',

                },
                17: {
                    name: 'destroyed station',
                    thumnail: 'http://localhost:3000/Games/17/Screenshots/Screenshot_1366x605_18.png',
                    categories: ['shooter', 'adventure', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 17 on the server.',
                    path: 'http://localhost:3000/Games/17/',

                },
                18: {
                    name: 'the adventure',
                    thumnail: 'http://localhost:3000/Games/18/Screenshots/Screenshot_1366x605_4.png',
                    categories: ['platform', 'action', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 18 on the server.',
                    path: 'http://localhost:3000/Games/18/',

                },
                19: {
                    name: 'the final mission',
                    thumnail: 'http://localhost:3000/Games/19/Screenshots/Pe76m5.png',
                    categories: ['shooter', 'adventure', 'action', '3D'],
                    discription: 'This is a fake description not having any specific meaning but every game has a special discription this is the game number 19 on the server.',
                    path: 'http://localhost:3000/Games/19/',

                },
            },
        };
        
        
    };
    
    // initializing the state
    async componentDidMount() {
        
        const loginner = await api.loginInfo();
        console.log(loginner.username);
        this.setState({username: loginner.username})


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
		
		gridContainer.style.cssText = `display: grid; grid-template-areas: ${templateArea}; grid-template-columns: auto auto auto; gap: 2em;padding-left: 40px;
        padding-right: 40px;   `;


		
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
        
        gridContainer.style.cssText = `display: grid; grid-template-areas: ${templateArea}; grid-template-columns: auto auto auto; gap: 2em;`;
    
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