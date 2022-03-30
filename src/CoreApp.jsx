// handling react
import React, { Component } from 'react';

// handling the components
import Login from "./components/login/App";
import Header from './components/Header/App';
import Footer from './components/Footer/App';
import GameAdding from './components/GameAdding/App';

// handling api file to get our custom apis
import api from './components/api.js';

// handling router module
import { Navigate, Route, Routes } from 'react-router-dom';


// handling Core App details
export default class CoreApp extends Component{
    constructor (props){
        super(props);
        this.state = {
            username: ""
        };
        
        
    };
    async componentDidMount() {
        const loginner = await api.loginInfo();
        console.log(loginner.username);
        this.setState({username: loginner.username})
    }
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
    render() {
        console.log(this.state.username);
        return (
            <React.Fragment>
                <Header user = {this.state.username} 
                        onLogout = {this.logoutHandler}/>
                    
                
                    <Routes>
                        <Route path = '/' element = {<h1>Hi I am Home</h1>} />
                        {/* هجيب ال redirect واظبط الحل 
                        */}
                        
                        {this.state.username? <Route    path = '/login' 
                                                        element = {<Navigate to = '/' replace />} /> 
                            : <Route    path = '/login' 
                                        element = {<Login   user = {{...this.state}}
                                                            onLogin = {this.loginHandler}    
                                    
                        />} />}
                        <Route path = '/gameadding' element = {<GameAdding />}/>
                    </Routes>
                <Footer />
            </React.Fragment>
            );
    }
}