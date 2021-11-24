import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

function FooterComp() {
    return (
        <div>
            <Navbar className="footBar" bg="warning" variant="dark" expand="lg" fluid>
                    <Container className="justify-content-center" fluid>
                        <Navbar.Brand as={Link} to={"/"}>Bob's Blogers</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/blogs"}>BLOGS</Nav.Link>
                            <Nav.Link as={Link} to={"/burgers"}>BURGERS</Nav.Link>
                            <NavDropdown title="SIDES" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={"/writers"}>WRITERS</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/about"}>ABOUT</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"./contact"}>
                            CONTACT
                            </Nav.Link>
                        </Nav>
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default FooterComp
