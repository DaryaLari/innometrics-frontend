import {createSelector} from "reselect";
import _ from 'lodash'

export const userAuthorized = createSelector(
  (state) => {
    return state.user
  },
  (user) => {
    return user.authorized
  }
)

export const getActivities = createSelector(state => state.activities, actStore => actStore.activities)

export const activitiesSummarized = createSelector(
  (state) => getActivities(state),
  (activities) => {
    let actObj = _(activities).chain()
      .reduce(
        (result, a) => {
          result[a.executable_name] = _.add(result[a.executable_name],Date.parse(a.end_time) - Date.parse(a.start_time))
          return result
        }, {})
      .reduce(
      (result, value, key) => _.concat(result, {duration: value, executable_name: key}), [])
      .sortBy('duration')
      .value()
    return actObj
  }
)