import React from 'react';
import ContactForm from '../../../components/UI/ContactForm';
import { Route } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'

const Contact = (props) => {

    const handleContactForm = () => {
        props.history.push(`${props.history.location.pathname}/form`);
    }

    return (
        <div>
            <div>
                <div className="contact-subtitle">Adresse : </div>
                <p>xxxxxxxxxxxx</p>
            </div>
            <div>
                <div className="contact-subtitle">Télephone : </div>
                <p>xxxxxxxxxxxx</p>
            </div>
            <div>
                <div className="contact-subtitle contact-subtitle--inline">Vous préferez nous écrire? </div>
                <LinkContainer to="/contact/form" exact >
                <Button variant="primary">Formulaire contact</Button>
                </LinkContainer>
                <Route path="/contact/form" exact render={props => <ContactForm {...props} />} />
            </div>
        </div>
    )
}

export default Contact;