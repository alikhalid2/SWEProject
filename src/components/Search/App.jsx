import React, {Component} from 'react';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
       <React.Fragment>
        <input class="comment" type="text" placeholder="" required />
        <button type="submit">Search</button>
        </React.Fragment>
            
      );
                  
    }
}