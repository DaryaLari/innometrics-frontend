import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthorizationPage from "./components/AuthorizationPage";
import DashboardPage from "./components/DashboardPage";
import styles from "./style.css";

class App extends React.Component {
  render() {
      return (
          <React.Fragment>
            <Header/>
            <main>
              <AuthorizationPage/>
              {/*<DashboardPage/>*/}
            </main>
            <Footer/>
          </React.Fragment>
      )
  }
}

export default App;