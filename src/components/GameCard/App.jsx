import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

function GameThumnail(props){
    const navigate = useNavigate();

    const handleClick = (gameNumber) => {
        navigate('/gameplay/' + gameNumber);
    };
    return(
        <img onClick = {() => handleClick(props.game._id)} src = {props.game.thumnail} alt = {props.game.name} height = '300px' width = '480px' className='mousehand'></img>
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
           <GameThumnail game = {this.props.game} gameNumber = {this.props.gameNumber}/>
        )
    }
}