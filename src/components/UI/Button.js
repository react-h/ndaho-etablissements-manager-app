import React from 'react';

const Button = (props) => {
    const classes = `btn ${props.btnType}`
    return (
        <button className={classes} style={{ opacity: props.selected ? 1 : 0.6 }} onClick={props.clic}>
            {props.children}
        </button>
    );
};

export default Button;