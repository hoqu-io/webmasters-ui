/* global fetch, localStorage */

export default (body) => (
  fetch(`${URI}/upload`, {
    method: 'POST',
    headers: { Token: localStorage.getItem('token') || '' },
    body
  }).then((response) => (
    response.json()
  ))
)

const URI = 'http://api.hoqu.io'
