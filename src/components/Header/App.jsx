
import React, { Component } from 'react';

export default class App extends Component {
    

    render(){ 
        const {user, onLogout} = this.props;
        return(
            <div>
                {user?<h1>Hello {user}</h1> : <h1>Header</h1> }
                <button onClick={onLogout}>LogOUT</button>
            </div>
    );
    }
}