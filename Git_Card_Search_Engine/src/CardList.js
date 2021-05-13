import './App.css';
import React from 'react'
import { Card } from './Card';

export const CardList = (props) => {

    return (
        <div>
            {props.profiles.map(profile => <Card {...profile} />)}
        </div>);
}