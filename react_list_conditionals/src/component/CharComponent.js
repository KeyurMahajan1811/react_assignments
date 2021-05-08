import React, { Component } from 'react';

{/* <li>Create another component ( CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).--Done</li> */ }


export const CharComponent = (props) => {
    const style = {
        display: ' inline - block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        width: '3%',
        border: '1px solid black'
    };
    return <div style={style} onClick={props.clicked}>
        <h1>{props.text}</h1>


    </div>

}