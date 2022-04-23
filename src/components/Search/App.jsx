import React, {Component} from 'react';
import api from '../api.js';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: 'ahmed',
            gameResult: [],
        };
    }
    changeHandler = async (event) => {
        console.log(event);
        let search = event.target.value;
        console.log(search);
        const result = await api.search(search);
        this.setState({
            searchValue: search,
            gameResult: result
        });
        console.log(this.state.gameResult);
    };
    render() {
        console.log(this.state.gameResult);
        return (
       <React.Fragment>
        <input type="search" placeholder="search" value = {this.state.searchValue} onChange = {this.changeHandler} />
        <div class = 'suggestions'>
            {this.state.gameResult.map((game) => <a key = {game.name} href = '/'>{game.name}</a>)}
        </div>
        <button type="submit">Search</button>
        </React.Fragment>
            
      );
                  
    }
}