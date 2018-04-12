/* global localStorage */

export default function * () {
  localStorage.clear()
  window.location.reload()
}
