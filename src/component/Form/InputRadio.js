import React from 'react';

function InputRadio(props) {
    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="radio" id={props.id} checked={props.checked} value={props.value} name={props.name}
                   onChange={event => props.onChange(event)}/>
        </React.Fragment>
    );
}

export default InputRadio;