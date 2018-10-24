import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {logoutRequest} from "../../../store/user/actionCreators";
import styles from "./style.css";

class Menu extends React.Component {
  guestNavigation = [
    {name: "Main Page", path: "/"}
  ]
  userNavigation = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "Main Page", path: "/"}
  ]
  render() {
    const navigation = this.props.authorized ? this.userNavigation : this.guestNavigation
    return (
        <nav className={styles.menu}>
          {navigation.map((i) => {
            return <div className={styles.menuItem} key={i.name}
                        onClick={() => this.props.history.push(i.path)}
                    >
                      {i.name}
                    </div>
          })}
          {this.props.authorized ?
              (
                  <div className={styles.authMenu}
                       onClick={this.props.logout}
                  >
                    <div className={styles.authItem}>Logout</div>
                  </div>
              )
              :
              (
                  <div className={styles.authMenu}>
                    <div className={styles.authItem} onClick={() => this.props.history.push("/login")}>Login</div>/
                    <div className={styles.authItem} onClick={() => this.props.history.push("/register")}>Register</div>
                  </div>
              )}
        </nav>

    )
  }
}

Menu = connect(
    (state) => ({authorized: state.user.authorized}),
    (dispatch) => ({
      logout: () => dispatch(logoutRequest())
    })
)(Menu)

export default withRouter(Menu);