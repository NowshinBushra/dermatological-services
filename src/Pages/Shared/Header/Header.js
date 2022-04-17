import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo3.png'
const Header = () => {
    return (

        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img
                        src={logo}
                        width="100"
                        height="70"
                        className="d-inline-block align-top'"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Brand> <h3>HAPPY DERMATOLOGIC</h3> </Navbar.Brand>
                    <Nav className="ms-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;