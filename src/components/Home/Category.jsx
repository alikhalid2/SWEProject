import React from 'react';
import {useParams} from 'react-router-dom';
import GameCard from '../GameCard/App';

export default function Category(props) {
    const filteredGames = (category) => {
        console.log(props);
        if (category === 'ahmed'){
            return props.games
        }
    }
    
    const returnGames = (games) => {
        console.log(games);
        const alist = [];
        for (let game in games){
            alist.push(<li key = {props.games[game].name}><GameCard />{props.games[game].name}</li>)
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