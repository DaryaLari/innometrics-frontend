import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthorizationPage from './components/AuthorizationPage'
import DashboardPage from './components/DashboardPage'
import LandingPage from './components/LandingPage'
import AuthorizedRoute from './components/AuthorizedRoute'
import styles from "./style.css"

import { store } from './store'
import { history } from './helpers/history'

class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
            <Router history={history}>
              <React.Fragment>
                <Header/>
                  <main>
                    <Switch>
                      <Route exact path="/" component={LandingPage}/>
                      <AuthorizedRoute path="/dashboard" component={DashboardPage}/>
                      <Route path="/login" component={AuthorizationPage}/>
                      <Route path="/register" component={AuthorizationPage}/>
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