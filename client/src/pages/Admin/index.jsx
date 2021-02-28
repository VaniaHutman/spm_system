import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./styles/style.css";
import AdminHeader from "../../components/AdminHeader";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNewRequests: [], 
      allWaitingRequests: [],
      id: '',
      status: ''
    };

    this.updateAllRequests = this.updateAllRequests.bind(this);
    this.getAllNewRequests = this.getAllNewRequests.bind(this);
    this.getAllWaitingRequests= this.getAllWaitingRequests.bind(this);
    this.updateId = this.updateId.bind(this);
    this.changeStatusById = this.changeStatusById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  updateId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  getAllNewRequests = () => {
    axios.get(`http://localhost:3000/request/allNewRequests`)
    .then((res) => {
      console.log(res.data);
      const requests = res.data;
      this.setState({
        allNewRequests: requests,
      });
    });
  };

  getAllWaitingRequests = () => {
    axios.get(`http://localhost:3000/request/allWaitingRequests`)
    .then((res) => {
      console.log(res.data);
      const requests = res.data;
      this.setState({
        allWaitingRequests: requests,
      });
    });
  };

  changeStatusById = () => {
    const { id } = this.state;
    if (id == "") alert("Введіть id запиту");
    else {
      axios
        .post(`http://localhost:3000/request/changeStatusById`, {
          id: id,
          status: 'wait'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({
          id: ''
        });
    }
    this.updateAllRequests();
  };

  deleteById = () => {
    const { id } = this.state;
    if (id == "") alert("Введіть id запиту");
    else {
      axios
        .delete(`http://localhost:3000/request/deleteById`, {
          data: {
            id: id
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.setState({
        id: ''
      });
    }
    this.updateAllRequests();
  };

  updateAllRequests = () => {
    this.getAllNewRequests();
    this.getAllWaitingRequests();
  }

  componentDidMount() {
    setInterval(() => this.updateAllRequests(), 1000)
  }

  render() {
    return (
      <>
        <AdminHeader />
        <Container className="adminPanel">
          <div className="allNewRequests" id="example">
            <p className="titleTypeOfRequest">Нові запити</p>
            <ul className="allRequests">
              {this.state.allNewRequests.map(request => 
                <li key={request.Id}>
                {request.Id}. {request.Full_name}, {request.Name_of_university}, тел: {request.Phone}
                , {request.Email}
              </li>)
              }
            </ul>
            <input className="requestId" placeholder="id" value={this.state.id} onChange={this.updateId}></input>
            <button type="button" onClick={this.changeStatusById}>Очікувати</button>
            <button type="button" onClick={this.deleteById}>Видалити</button>
          </div>

          <div className="allNewRequests" id="example">
            <p className="titleTypeOfRequest">Очікуючі запити</p>
            <ul className="allRequests">
              {this.state.allWaitingRequests.map(request => 
                <li key={request.Id}>
                  {request.Id}. {request.Full_name}, {request.Name_of_university}, тел: {request.Phone}
                  , {request.Email}
                </li>)
              }
            </ul>
            <input className="requestId" placeholder="id" value={this.state.id} onChange={this.updateId}></input>
            <button type="button" onClick={this.deleteById}>Видалити</button>
          </div>
        </Container>
      </>
    );
  }
}
