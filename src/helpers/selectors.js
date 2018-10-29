import {createSelector} from "reselect";

export const userAuthorized = createSelector(
  (state) => {
    return state.user
  },
  (user) => {console.log("selector " + user.authorized)
    return user.authorized
  }
)
