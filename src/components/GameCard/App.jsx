import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

function GameThumnail(props){
    const navigate = useNavigate();

    const handleClick = (e) => {
        props.setGame();
        navigate('/gameplay');
    };
    return(
        <img onClick = {handleClick} src = {props.game.thumnail} alt = {props.game.name}></img>
    );
}
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        return(
           <GameThumnail game = {this.props.game} setGame = {() => console.log(this.props.handleClickGame)}/>
        )
    }
}