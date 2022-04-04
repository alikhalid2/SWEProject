
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class App extends Component {
    
    isLogin = () => {
        console.log('hello');
        const {user, onLogout} = this.props;
        if (user) {
            return(
                <React.Fragment>
                    <h1>Hello {user}</h1>
                    <button onClick = {onLogout}>LogOUT</button>
                </React.Fragment>
            )
        }
        else {
            return(
                <React.Fragment>
                    <h1>Header</h1>
                    <Link to = '/login'>
                        <button>LogIN</button>
                    </Link>
                </React.Fragment>
            )
        }
    };

    render(){ 
        
        return(
            <div>
                {this.isLogin()}
            </div>
    );
    }
}