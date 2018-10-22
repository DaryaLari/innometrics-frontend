import axios from "axios";

export const DOMAIN_ADDRESS = 'http://188.130.155.81:8120'

const defaultHeaders = {
  'accept': 'application/json',
  'Content-Type': 'multipart/form-data'
}

export function postRequest (url, params={}, headers=defaultHeaders, domain=DOMAIN_ADDRESS) {

  const formData = new FormData()
  Object.keys(params).forEach(key => formData.append(key, params[key]))

  return new Promise((resolve, reject) => {
    axios.post(
        `${domain}${url}`,
        formData,
        {headers: headers}
    )
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.log(error, error.response)
          reject(error.response)
        })
  })
}

export function getRequest (url, params={}, headers=defaultHeaders, domain=DOMAIN_ADDRESS) {

  return new Promise((resolve, reject) => {
    axios.get(
        `${domain}${url}`,
        {
          params: params,
          headers: headers
        }
    )
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.log(error.response)
          reject(error.response)
        })
  })
}