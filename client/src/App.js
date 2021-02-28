import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import HowItWorks from './pages/How-it-works';
import NewRequest from './pages/NewRequest'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newRequest" component={NewRequest} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
