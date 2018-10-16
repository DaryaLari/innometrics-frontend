import React from "react";
import {Provider} from "react-redux";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthorizationPage from "./components/AuthorizationPage";
import DashboardPage from "./components/DashboardPage";
import LandingPage from "./components/LandingPage";
import styles from "./style.css";

import {store} from "./store";

class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
            <Router>
              <React.Fragment>
                <Header/>
                  <main>
                    <Switch>
                      <Route exact path="/" component={LandingPage}/>
                      <Route path="/dashboard" component={DashboardPage}/>
                      <Route path="/login" component={AuthorizationPage}/>
                      <Route path="/register" component={AuthorizationPage}/>
                      <Route path="/auth" component={AuthorizationPage}/>
                      <Redirect to="/dashboard"/>
                    </Switch>
                  </main>
                <Footer/>
              </React.Fragment>
            </Router>
          </Provider>
      )
  }
}

export default App;