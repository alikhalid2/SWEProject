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
            
          
			<div className="bar2">
	<nav id="navbar">
	<ul className="navul">
		{this.state.categories.alist.map((category) => <li key = {category} className = 'navli'><Link to = {category}>{category}</Link></li>)}
	{/* <Link to = '/ahmed'><li  className="navli"> All Game </li></Link>
	<li className="navli"> Latest Game </li>
	<li className="navli">Coming Soon </li>
	<li className="navli">Star War </li>
	<li className="navli">Star War </li>
	<li className="navli">EA Sports </li> */}
	
	</ul>

	</nav>

	<ul>
		<Routes>
			<Route path = ':category' element = {<Category games = {this.props.games}/>} />
			<Route path = '/' element = {<Category games = {this.props.games}/>} />
		</Routes>
	</ul>
	</div>
           
        );
    }
}