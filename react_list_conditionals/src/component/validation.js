import React from 'react';

export const Validation = (props) => {
    return <div>
        {props.strLength > 5 ? <p style={{ color: "red" }}>String is too long</p> : null}
        {props.strLength < 3 && props.strLength !== 0 ? <p style={{ color: "red" }}>String is too short</p> : null}

    </div>

}