import React from "react";
import {Link} from "react-router-dom";
import styles from "./style.css";

class Menu extends React.Component {
  items = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "2", path: "/2"},
    {name: "3", path: "/3"},
  ]
  render() {
    return (
        <nav className={styles.menu}>
          {this.items.map((i) => {return <MenuItem name={i.name} path={i.path} key={i.name}/>})}
          <MenuItem name={"Login/\nRegister"} path="/login"/>
        </nav>

    )
  }
}

class MenuItem extends React.Component {
  render() {
    return (
        <div className={styles.menuItem}>
            <Link to={this.props.path}>{this.props.name}</Link>
        </div>

    )
  }
}

export default Menu;