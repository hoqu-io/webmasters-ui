/* global fetch, localStorage */

export default async ({ action }) => {
  const token = localStorage.getItem('token')

  const response = await fetch(
    URI,
    {
      method: 'POST',
      headers: { Token: token || '' },
      body: JSON.stringify(action)
    }
  )

  const newToken = response.headers == null ? null : response.headers.get('token')
  if (newToken) { localStorage.setItem('token', newToken) }

  const json = await response.json()

  return json.result
}

const URI = 'http://api.hoqu.io/v2'
