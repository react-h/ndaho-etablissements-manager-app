import React from 'react';

const Erreur = (props) => (
    <div className="alert alert-danger" role="alert">
        {props.children}
    </div>
);

export default Erreur;