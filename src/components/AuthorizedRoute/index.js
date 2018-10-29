import { userAuthorized } from '../../helpers/selectors'

const AuthorizedRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
           render={(props) =>
             userAuthorized() ? (
               <Component {...props} />
             ) : (
               <Redirect
                 to={{
                   pathname: '/login',
                   state: {from: props.location}
                 }}
               />
             )
           }
    />
  )
}

export default AuthorizedRoute;