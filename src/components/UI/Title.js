import React from 'react';

const Title = (props) => {
    return (
        <h1 className="border border-dark text-white text-center bg-primary">
            {props.children}
        </h1>
    );
}

export default Title;