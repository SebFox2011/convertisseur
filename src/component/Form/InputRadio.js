import React from 'react';

function InputRadio(props){
    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="radio" id={props.id} checked={props.checked} name={props.name}/>
        </React.Fragment>
    );
}

export default InputRadio;