import React from 'react';
import Button from '../../../components/UI/Button';

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
                <Button btnType="btn-primary" clic={handleContactForm}>Formulaire de contact</Button>
            </div>
        </div>
    )
}

export default Contact;