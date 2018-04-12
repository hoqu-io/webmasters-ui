export default (dispatch) => (payload) => {
  const url = payload2url(payload)
  window.open(url, '_target')
}

/* link format: (http|https)://host/#/page?param1=v1&p2=v2 */

const payload2url = (payload) => {
  if (typeof payload === 'string') { return payload }
  if (typeof payload === 'object') {
    const { protocol, hostname, port } = window.location
    const { page, params } = payload

    return `${protocol}//${hostname}:${port}/#/${page}${
      params == null
        ? ''
        : Object.keys(params)
          .filter((key) => (params[key] != null))
          .map((key) => (`${encodeURI(key)}=${encodeURI(params[key])}`))
          .join('&')
    }`
  }
}
