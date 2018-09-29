import React from "react";
import styles from "./style.css";

class Menu extends React.Component {
  items = [
    {name: "1", path: "/1"},
    {name: "2", path: "/2"},
    {name: "3", path: "/3"},
  ]
  render() {
    return (
        <div className={styles.menu}>
          {this.items.map((i) => {return <MenuItem name={i.name} path={i.path} key={i.name}/>})}
          <MenuItem name={"Login/\nRegister"} path="/login"/>
        </div>

    )
  }
}

class MenuItem extends React.Component {
  render() {
    return (
        <div className={styles.menuItem}>
          <a href={this.props.path}>{this.props.name}</a>

        </div>

    )
  }
}

export default Menu;