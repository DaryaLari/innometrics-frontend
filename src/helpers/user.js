export const isTokenExists = () => {
  return null != localStorage.getItem("user")
      && null != JSON.parse(localStorage.getItem("user")).token
}

export const getToken = () => {
  if(isTokenExists()){
    return JSON.parse(localStorage.getItem("user")).token
  }
  return ''
}

export const saveUserToLocalStorage = (token) => {
  localStorage.setItem("user", JSON.stringify({token: token}))
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user")
}