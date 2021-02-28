import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import Header from "../../components/Header";
import "./styles/style.css";

export default class Login extends Component {
    constructor (props) {
        super(props);
        this.handleCkick = this.handleCkick.bind(this);
    }
    handleCkick(){
        
    }
    
    render() {
        return (
            <>
                <Header />
                <Container className="login_panel">
                    <p className = "login_text">Вхід в систему</p>
                    <div className="input-group input-group-sm input_text">
                        <input type="text" className="form-control input_text" placeholder="логін">
                        </input>
                    </div>
                    <div className="input-group input-group-sm input_text">
                        <input type="password" className="form-control input_text" placeholder="пароль">
                        </input>
                    </div>
                    <button className="login_button" onClick={this.handleCkick}>
                        <a href="#">Ввійти</a> 
                    </button>
                </Container>
            </>
        )
    }
}