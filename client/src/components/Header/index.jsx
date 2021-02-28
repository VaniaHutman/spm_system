import React, { Component } from 'react';
import './css/style.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className = "Header">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <div className="logo">
                            SPM system
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="Menu">
                                <Nav.Link href="/">головна</Nav.Link>
                                <Nav.Link href="/how-it-works">як це працює</Nav.Link>
                                <Nav.Link href="/contacts">контакти</Nav.Link>
                                <Nav.Link href="/login">вхід</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}