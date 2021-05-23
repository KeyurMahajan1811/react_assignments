import React, { Component } from 'react';

const GetInput = (props) => {



    return (
        <div>
            <input type="text"
                onChange={props.SetPersonName}
            />
            <input type='submit' onClick={props.Submitted} value="Get Key" />

        </div>
    );

}

export default GetInput;