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
	<Link to = '/ahmed' style={{ textDecoration: 'none',color: 'white'  }}><li  className="navli"> All Game </li></Link>
	<Link to = '/ahmed' style={{ textDecoration: 'none',color: 'white'  }}><li className="navli"> Latest Game </li></Link>
	<Link to = '/ahmed' style={{ textDecoration: 'none',color: 'white'  }}><li className="navli">Coming Soon </li></Link>
	<Link to = '/ahmed' style={{ textDecoration: 'none',color: 'white'  }}><li className="navli">Star War </li></Link>
	<Link to = '/ahmed' style={{ textDecoration: 'none',color: 'white'  }}><li className="navli">Star War </li></Link>
	<Link to = '/ahmed' style={{ textDecoration: 'none',color: 'white'  }}><li className="navli">EA Sports </li></Link>
	
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