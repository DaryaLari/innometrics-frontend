import React from "react";
import {Link, HashRouter as Router} from "react-router-dom";
import Logo from "../Logo";
import Menu from "./Menu";
import styles from "./style.css";

class Header extends React.Component {
  render() {
    return (<header className={styles.header}>
          <Router>
          <Link to="/"><Logo/></Link>
          </Router>
          <Menu/>

        </header>

    )
  }
}

export default Header;