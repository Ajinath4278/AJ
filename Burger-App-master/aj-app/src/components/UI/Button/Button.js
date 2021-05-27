import React from 'react';

import './Button.css';


const Button = (props) => {
    return(
    <button
        // className={[classes.Button, classes[props.btnType]].join(' ')}
        className="Button"
        onClick={props.clicked}>{props.children}</button>);
    };

export default Button;