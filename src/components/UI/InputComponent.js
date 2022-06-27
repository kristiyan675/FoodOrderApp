import React from 'react';
import './InputComponent.css';


const MealInput = React.forwardRef((props, ref) => {
    return (
        <div className="input">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref = { ref } {...props.input}></input>
        </div>
        );
});

export default MealInput;