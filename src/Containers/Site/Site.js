import React from 'react';
import NavBar from '../../components/UI/NavBar';
import Accueil from './Accueil/Accueil';
import Contact from './Contact/Contact';
import Localisation from './Localisation/Localisation';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Erreur404 from '../../components/UI/Erreur404';
import Erreur from '../../components/UI/Erreur';
import Footer from '../../components/UI/Footer';


const Site = (props) => (
    <BrowserRouter>
        <div className="main">
            <NavBar />
            <Container fluid>
                <Switch>
                    <Route path="/" component={Accueil} exact />
                    <Route path="/localisation" render={() => <Localisation />} exact />
                    <Route path="/contact" render={() => <Contact />} exact />
                    <Route render={() => <Erreur><Erreur404 /></Erreur>} />
                </Switch>
            </Container>
        </div>

        <Footer />
    </BrowserRouter>
);

export default Site;