
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home style.css';
import Search from '../Search/App';

export default class App extends Component {
    
    isLogin = () => {
        console.log('hello');
        const {user, onLogout} = this.props;
        if (user) {
            return(
                <React.Fragment>
                    <div >Hello {user}</div>
                    <button onClick = {onLogout}>LogOUT</button>
                </React.Fragment>
            )
        }
        else {
            return(
                <React.Fragment>
                    
                    <Link to = '/login'>
                                          <button>LogIN</button>
                                      </Link>
                </React.Fragment>
            )
        }
    };

    render(){ 
        
        return(
              <React.Fragment>
                  
                  <div>
                  <div class="bar ">
                        <div class="header-logo">
                          <h1>Flare gun</h1>
                          </div>
                  
                          
                          <div class="header-search">
                          <Search />
                          </div>
                   <div class="header-login">{this.isLogin()}</div>

                    </div>   
                      </div>
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
              </React.Fragment> 
    );
    }
}