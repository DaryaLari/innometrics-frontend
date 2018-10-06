import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {LoginPage, RegisterPage} from "./components/AuthorizationPage";
import DashboardPage from "./components/DashboardPage";
import LandingPage from "./components/LandingPage";
import styles from "./style.css";

class App extends React.Component {
  render() {
      return (
          <Router>
            <React.Fragment>
              <Header/>
                <main>
                  <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/dashboard" component={DashboardPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Redirect to="/dashboard"/>
                  </Switch>
                </main>
              <Footer/>
            </React.Fragment>
          </Router>
      )
  }
}

export default App;