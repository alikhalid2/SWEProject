import React from 'react';
import {useParams} from 'react-router-dom';
import GameCard from '../GameCard/App';

export default function Category(props) {
    const filteredGames = (category) => {
        console.log(category);
        console.log(props);
        if (category === undefined){
            return props.games
        }
    }
    
    const returnGames = (games) => {
        console.log(games);
        const alist = [];
        for (let game in games){
            alist.push(<li key = {props.games[game].name}><GameCard game = {props.games[game]}/>{props.games[game].name}</li>)
        }
        return alist
    }
    const {category} = useParams();
    return (
        <React.Fragment>
        {returnGames(filteredGames(category))}
        </React.Fragment>
    )
}