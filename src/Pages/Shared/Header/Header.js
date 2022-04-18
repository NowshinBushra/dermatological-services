import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user2] = useAuthState(auth);
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
        });
    }, []);

    const handleLogout = () =>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          });
    }
    return (

        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><h2>HAPPY DERMATOLOGY</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {user?.uid ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;