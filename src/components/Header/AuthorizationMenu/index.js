import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {logoutRequest} from "../../../store/user/actionCreators";
import {userAuthorized} from "../../../helpers/selectors";
import styles from "./style.css";

class AuthMenu  extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.authorized !== this.props.authorized ? true : false
  }
  render(){
    return this.props.authorized ?
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
              <div className={styles.authItem} onClick={() => this.props.history.push("/login")}>Login</div>
              <span style={{padding: "0 5px 0 5px"}}> or </span>
              <div className={styles.authItem} onClick={() => this.props.history.push("/register")}>Register</div>
            </div>
        )
  }
}

const AuthorizationMenu = connect(
    (state) => ({authorized: userAuthorized(state)}),
    (dispatch) => ({
      logout: () => dispatch(logoutRequest())
    })
)(AuthMenu)

export default withRouter(AuthorizationMenu);