import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import axios from "axios";
import "./css/style.css";

export default class NewRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      university: "",
      phone: "",
      email: "",
    };

    this.updateData = this.updateData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateData = (e) => {
    let input = e.target.name;
    this.setState({
      [input]: e.target.value,
    });
  };

  handleClick = () => {
    const { name, university, phone, email } = this.state;
    if (name == "") alert("Введіть ваше ім'я, прізвище та по-батькові");
    else if (university == "") alert("Введіть назву вашого навчального закладу");
    else if (phone == "") alert("Введіть ваш телефон");
    else if (email == "") alert("Введіть вашу пошту");
    else {
      axios
        .post(`http://localhost:3000/request/new`, {
          name: name,
          uni: university,
          phone: phone,
          email: email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.setState({
        name: "",
        university: "",
        phone: "",
        email: "",
      });
      alert("Ваші дані відіслано. Адміністратор зв'яжеться з вами найближчим часом.");
    }
  };

  render() {
    return (
      <>
        <Header />
        <Container className="login_panel">
          <p>
            Введіть свої дані для того щоб наш адміністратор зв'язався з вами
          </p>
          <input
            type="text"
            className="data"
            placeholder="Ім'я, прізвище, по-батькові"
            name="name"
            value={this.state.name}
            onChange={this.updateData}
          />
          <input
            type="text"
            className="data"
            placeholder="Повна назва навчального закладу"
            name="university"
            value={this.state.university}
            onChange={this.updateData}
          />
          <input
            type="text"
            className="data"
            placeholder="Контактний номер телефону"
            name="phone"
            value={this.state.phone}
            onChange={this.updateData}
          />
          <input
            type="text"
            className="data"
            placeholder="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.updateData}
          />
          <button
            type="button"
            className="send_button"
            onClick={this.handleClick}
          >
            <a href="./">Надіслати</a>
          </button>
        </Container>
      </>
    );
  }
}
