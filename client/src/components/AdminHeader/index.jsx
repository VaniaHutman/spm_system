import React, { Component } from 'react';
import './css/style.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className = "AdminHeader">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <div className="adminLogo">
                            SPM system (admin)
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="adminMenu">
                                <Nav.Link href="/addUser">додати користувача</Nav.Link>
                                <Nav.Link href="/showUser">переглянути користувачів</Nav.Link>
                                <Nav.Link href="/login">вихід</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}