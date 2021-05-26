import React from 'react';

const Footer = (props) => (
    <div className="bg-light footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item"><a href="#">À propos</a></li>
                        <li className="list-inline-item">&middot;</li>
                        <li className="list-inline-item"><a href="#">Vie privée</a></li>
                        <li className="list-inline-item">&middot;</li>
                        <li className="list-inline-item"><a href="#">Conditions d'utilisations</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;