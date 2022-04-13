import React from 'react';
import {useParams} from 'react-router-dom';
import GameCard from '../GameCard/App';

export default function Category(props) {

    const filteredGames = (category) => {
        console.log(category);
        const returnedGames = {};
        if (category === undefined){
            return props.games
        } else {
            for (let game in props.games){
                console.log(props.games[game].categories)
                if (props.games[game].categories.includes(category)){
                    returnedGames[game] = props.games[game];
                }
            }
        }
        console.log(returnedGames);
        return returnedGames;
    }
    
    const returnGames = (games) => {
        console.log(games);
        const alist = [];
        for (let game in games){
            alist.push(<li key = {props.games[game].name}><GameCard game = {props.games[game]} gameNumber = {game}/>{props.games[game].name}</li>)
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