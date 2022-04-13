
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
                  <div className="bar ">
                        <div className="header-logo">
                          <Link to = "/" style = {{color: 'white', textDecoration: 'none'}}><h1>Flare gun</h1></Link>
                          </div>
                  
                          
                          <div className="header-search">
                          <Search />
                          </div>
                   <div className="header-login">{this.isLogin()}</div>

                    </div> 
                      
                      </div>
                     
              </React.Fragment> 
    );
    }
}