import React, { Component } from 'react';


export const CharComponent = (props) => {
    const style = {
        display: ' inline - block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        width: '3%',
        border: '1px solid black'
    };
    return <div style={style}>
        <h1>{props.text}</h1>


    </div>

}