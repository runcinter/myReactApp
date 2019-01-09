import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <input onChange={props.onHobbyChange} value={props.name}/>
        </div>
    )
};

export default person;

