import React , {Component} from 'react';
import Category from './Category';
// handling router module

import { Link, Route, Routes} from 'react-router-dom';


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
	
    render() {
        return (
            
           
			<div className="bar2">
	<nav id="navbar">
	<ul className="navul">
	<Link to = '/ahmed'><li  className="navli"> All Game </li></Link>
	<li className="navli"> Latest Game </li>
	<li className="navli">Coming Soon </li>
	<li className="navli">Star War </li>
	<li className="navli">Star War </li>
	<li className="navli">EA Sports </li>
	
	</ul>

	</nav>

	<ul>
		<Routes>
			<Route path = ':category' element = {<Category games = {this.props.games}/>} />
		</Routes>
	</ul>
	</div>
           
        );
    }
}