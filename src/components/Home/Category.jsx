import React from 'react';
import {useParams} from 'react-router-dom';

export default function Category() {
    const params = useParams();
    return (
        <h1>{params.category}</h1> 
    )
}