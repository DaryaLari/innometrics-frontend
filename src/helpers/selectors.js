import {createSelector} from "reselect";

export const userAuthorized = createSelector(
  (state) => {
    return state.user
  },
  (user) => {
    return user.authorized
  }
)
