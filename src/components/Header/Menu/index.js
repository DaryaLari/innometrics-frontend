import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {userAuthorized} from "../../../helpers/selectors";
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
        </nav>

    )
  }
}

Menu = connect(
  (state) => ({authorized: userAuthorized(state)}),
  (dispatch) => ({})
)(Menu)

export default withRouter(Menu);