import React, { Component } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Header from "../../components/Header";
import "./styles/style.css";
import header_img from "./img/header_img.jpg";
import clock_img from "./img/cards_img1.png";
import usible_img from "./img/cards_img2.png";
import security_img from "./img/cards_img3.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Container fluid className="header">
          <Col className="header_text_col">
            <h1>Привіт!</h1>
            <p>
              Вітаємо тебе на нашому сайті, який значно полегшує контроль
              власної успішності при навчанні.
            </p>
          </Col>
          <Col className="header_img_col">
            <Image src={header_img} className="header_img" alt="Sorry!" />
          </Col>
        </Container>

        <div className="line"></div>

        <Container fluid className="content">
          <Card className="cards">
            <div>
              <div className="icons">
                <Image src={clock_img} className="cards_img" alt="Sorry!" />
              </div>
              <div className="caption">Економія часу</div>
              </div>
            <div className="description">
              З нашим сервісом ви значно пришвидшуєте роботу, так як вам не потрібно шукати
              потрібну сторінку в паперовому жужналі, лише обрати критерії потрібної вам
              сторінки і вона автоматично відобразиться.
            </div>
          </Card>
          <Card className="cards">
            <div>
            <div className="icons">
              <Image src={security_img} className="cards_img" alt="Sorry!" />
            </div>
            <div className="caption">Надійність</div>
            </div>
            <div className="description">
              Тепер ніхто крім вас не зможе змінювати інформацію по успішності студента з 
              вашого предмету, що забезпечує повну безпеку даних.
            </div>
          </Card>
          <Card className="cards">
            <div>
            <div className="icons">
              <Image src={usible_img} className="cards_img" alt="Sorry!" />
            </div>
            <div className="caption">Легкість</div>
            </div>
            <div className="description">
              Вам більше не потрібно носити з собою купу паперових журналів, у вас завжди
              буде під рукою електронний, адже ним можна користуватися як з комп'ютера так і 
              з телефону.
            </div>
          </Card>
        </Container>

        <Container fluid className="content">
          <Card className="start">
            <p className="come_to_us">
              Приєднуйся та відчуй всі переваги користування нашим сервісом!
            </p>
            <p className="span-shadow">
              <span>
                <a href="/newRequest">Розпочати разом з нами</a>
              </span>
            </p>
          </Card>
        </Container>
      </>
    );
  }
}
