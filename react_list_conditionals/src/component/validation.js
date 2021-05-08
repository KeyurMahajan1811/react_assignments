import React from 'react';

{/* 
  <li>Create a new component ( ValidationComponent) which receives the text length as a prop -- Done</li> 
  <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length) -- Done</li>
*/}


export const Validation = (props) => {
    return <div>
        {props.strLength > 5 ? <p style={{ color: "red" }}>String is too long</p> : null}
        {props.strLength < 3 && props.strLength !== 0 ? <p style={{ color: "red" }}>String is too short</p> : null}

    </div>

}