import React , {Component} from 'react';
import Category from './Category';
import './home.scss';

// handling router module

import { Link, Route, Routes} from 'react-router-dom';


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
			categories: this.getCategories(),
        };
		
    }
	
	/// get categories from games objecs
	getCategories = () => {
		const categories = {};
		for (let game in this.props.games){
			for (let category of this.props.games[game].categories)
			{
				try{
					categories[category]++;
				} catch {
					categories[category] = 1;
				}

			}
		}
		const alist = [];
		for (let category in categories){
			alist.push(category);
		}
		categories.alist = alist;
		return categories;
	};

	async componentDidMount() {
		const gridContainer = document.querySelector('.game-list');
		let gameLength = this.state.games.length;
		let templateArea = "";
		let modulus = gameLength % 3;
		if (modulus !== 0){
			gameLength += 3 - modulus;
		}
		for(let i = 1; i <= gameLength; i += 3){
			templateArea += `'${i} ${i + 1} ${i + 2}' `;
		}
		console.log(templateArea);
		
		gridContainer.style.cssText = "display: grid; grid-template-areas: '1 2 3' '4 5 6' '7 8 9'; grid-template-columns: auto auto auto; gap: 2em;";
		
	}



	

    render() {
        return (
        
			<React.Fragment>
          
			<div className="bar2">
	<nav id="navbar">
	<ul className="navul">
		<Link to = '/' style={{ textDecoration: 'none',color: 'white'  }}><li  className="navli"> All Games </li></Link>
		{this.getCategories().alist.map((category) => <Link to = {'/' + category} style={{ textDecoration: 'none',color: 'white'  }}><li  className="navli">{category}</li></Link>)}
	


	
	</ul>

	</nav>
	</div>
    <div>
	<ul className = "game-list ">
		<Routes>
			<Route path = ':category' element = {<Category games = {this.props.games} handleClickGame = {this.props.handleClickGame}/>}/>
			
			<Route path = '/' element = {<Category games = {this.props.games} handleClickGame = {this.props.handleClickGame}/>}/>
		</Routes>
	</ul> 
	</div> 
	</React.Fragment>
 
        );
    }
}