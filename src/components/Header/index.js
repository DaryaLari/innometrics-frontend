import React from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo";
import Menu from "./Menu";
import styles from "./style.css";

class Header extends React.Component {
  render() {
    return (
        <header className={styles.header}>
          <Link to="/"><Logo/></Link>
          <Menu/>

        </header>

    )
  }
}

export default Header;