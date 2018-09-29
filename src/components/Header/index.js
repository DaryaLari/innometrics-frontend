import React from "react";
import Logo from "../Logo";
import Menu from "./Menu";
import styles from "./style.css";

class Header extends React.Component {
  render() {
    return (<header className={styles.header}>
          <Logo/>
          <Menu/>

        </header>

    )
  }
}

export default Header;