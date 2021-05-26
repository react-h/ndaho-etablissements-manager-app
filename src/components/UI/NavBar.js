import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = (props) => (
    <>
        <Navbar expand="sm" bg="light" variant="light">
            <Navbar.Brand href="/">Ille et vilaine</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

                    <LinkContainer to="/" exact>
                        <Nav.Link>Acceuil</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/localisation" exact>
                        <Nav.Link>localisation</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contact" exact>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default NavBar;