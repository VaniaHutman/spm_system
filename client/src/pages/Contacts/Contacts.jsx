import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from "../../components/Header";

export default class Contacts extends Component {
    render() {
        return (
            <>
                <Header />
                <Container className="login_panel">
                    contacts
                </Container>
            </>
        )
    }
}