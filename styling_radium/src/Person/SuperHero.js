import React from 'react';
import Radium from 'radium';

import './Person.css';

const superhero = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '650px',
            ':hover': {
                backgroundColor: 'purple',
                boxShadow: '2px 2px 2px black',
                color: 'black'
            }
        }
    };
    return (
        <div className="Person" style={style}>
            <h1>NAME :{props.name}</h1>
            <p>FRANCHISE :{props.franchise}</p>

            <p>Description :{props.children}</p>
            <button className='button' onClick={props.click}>Remove Element</button>
            <p>Hope you liked this info</p>
        </div>
    )
};

export default Radium(superhero);