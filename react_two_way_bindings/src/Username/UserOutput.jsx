import React, { Component } from 'react';
import './User.css'

export const UserOutput = (props) => {
    return (
        <div className='User card'>
            <p>Hey, We are in UserOutput...</p>
            <h3 onClick={() => props.click('jacksparrow')}>Username:{props.name}</h3>
            <h3> Email:{props.email}</h3>
        </div>
    )
}

export default UserOutput;