import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AsideNavigation from './components/AsideNavigation'
import Spinner from './components/Spinner'
const AuthorizationPage  = lazy(() => import('./components/AuthorizationPage'))
const ActivitiesPage  = lazy(() => import('./components/ActivitiesPage'))
const LandingPage = lazy(() => import('./components/LandingPage'))
const AuthorizedRoute  = lazy(() => import('./components/AuthorizedRoute'))
const StatisticsPage  = lazy(() => import('./components/StatisticsPage'))
const MetricPage  = lazy(() => import('./components/MetricPage'))
import styles from './style.css'

class App extends React.Component {
  render() {
      return (
        <React.Fragment>
          <Header/>
          <main>
            <Route path='/(dashboard|activities|goals|settings|metric)' component={AsideNavigation}/>
            <Suspense fallback={<Spinner/>}>
              <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/login' component={AuthorizationPage}/>
                <Route path='/register' component={AuthorizationPage}/>
                <AuthorizedRoute exact path='/dashboard' component={StatisticsPage}/>
                <AuthorizedRoute path='/activities' component={ActivitiesPage}/>
                <AuthorizedRoute exact path='/metric/:metric' component={MetricPage}/>
                <Redirect to='/dashboard'/>
              </Switch>
            </Suspense>
          </main>
          <Footer/>
        </React.Fragment>
      )
  }
}



export default App