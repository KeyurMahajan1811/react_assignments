import './App.css';
import React, { useState } from 'react';
import axios from 'axios';





export const Form = (props) => {
    const [username, setUsername] = useState('');
    const [placeholder, setPlaceholder] = useState('Git Username')

    const handleSubmit = async (event) => {

        event.preventDefault();
        var resp = await axios.get(`https://api.github.com/users/${username}`);
        props.submitAction(resp.data);
        setUsername({ username: '' });
        setPlaceholder('Git Username')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'

                    onChange={event => setUsername(event.target.value)}
                    placeholder={placeholder} />
                <button>Submit </button>
            </form>
        </div>
    );

}


