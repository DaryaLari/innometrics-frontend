import React from "react";
import {Link} from "react-router-dom";
import styles from "./style.css";
import {connect} from "react-redux";
import {logoutRequest} from "../../../store/user/actionCreators";

class Menu extends React.Component {
  guestNavigation = [
    {name: "Main Page", path: "/"},
    {name: "Login/\nRegister", path: "/login"},
  ]
  userNavigation = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "2", path: "/2"},
    {name: "Logout", path: "/logout"},
  ]
  render() {
    const navigation = this.props.authorized ? this.userNavigation : this.guestNavigation
    return (
        <nav className={styles.menu}>
          {navigation.map((i) => {return <MenuItem name={i.name} path={i.path} key={i.name}/>})}
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

Menu = connect(
    (state) => ({authorized: state.user.authorized}),
    (dispatch) => ({
      logout: () => dispatch(logoutRequest())
    })
)(Menu)

export default Menu;