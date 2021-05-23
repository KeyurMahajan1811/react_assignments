import { React } from 'react'


const KeyGenrator = (props) => {

    let length = props.personName.length;
    let secretKey = '';

    if (length < 3) {
        throw new Error('We are Sorry...Something went wrong !!');
    }
    else {
        secretKey = Math.floor(Math.random() * 1000).toString() + length.toString() + props.personName;
        props.setSecretKey(secretKey);
    }

    return (
        <div>
            <h1>{secretKey}</h1>
        </div>
    )
}

export default KeyGenrator;