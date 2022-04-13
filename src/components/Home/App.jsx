import React , {Component} from 'react';
import Category from './Category';
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
    
	<ul>
		<Routes>
			<Route path = ':category' element = {<Category games = {this.props.games} handleClickGame = {this.props.handleClickGame}/>}/>
			<Route path = '/' element = {<Category games = {this.props.games} handleClickGame = {this.props.handleClickGame}/>}/>
		</Routes>
	</ul>  
	</React.Fragment>
 
        );
    }
}