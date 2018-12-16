import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectPageNavigation from './components/ProjectPageNavigation'
import Spinner from './components/Spinner'
const AuthorizationPage  = lazy(() => import('./components/AuthorizationPage'))
const ActivitiesPage  = lazy(() => import('./components/ActivitiesPage'))
const LandingPage = lazy(() => import('./components/LandingPage'))
const AuthorizedRoute  = lazy(() => import('./components/AuthorizedRoute'))
const ProjectsListPage  = lazy(() => import('./components/ProjectsListPage'))
const ProjectPage  = lazy(() => import('./components/ProjectPage'))
const PersonalStatisticsPage  = lazy(() => import('./components/PersonalStatisticsPage'))
const ProjectStatisticsPage  = lazy(() => import('./components/ProjectStatisticsPage'))
import styles from './style.css'

class App extends React.Component {
  render() {
      return (
        <React.Fragment>
          <Header/>
          <main>
            <Route path='/projects/:projectName' component={ProjectPageNavigation}/>
            <Suspense fallback={<Spinner/>}>
              <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/login' component={AuthorizationPage}/>
                <Route path='/register' component={AuthorizationPage}/>
                <AuthorizedRoute path='/dashboard' component={PersonalStatisticsPage}/>
                <AuthorizedRoute path='/activities' component={ActivitiesPage}/>
                <AuthorizedRoute exact path='/projects' component={ProjectsListPage}/>
                <AuthorizedRoute path='/projects/:projectName' component={ProjectStatisticsPage}/>
                {/*<Route path='/projects/:projectName' component={ProjectPage}/>*/}
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