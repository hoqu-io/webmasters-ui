/* global FileReader */

export default (fn) => {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('multiple', 'multiple')
  input.setAttribute('style', 'display:none')

  input.onchange = async () => {
    if (input.files[0] == null) { return }
    fn(await getFileData(input.files[0]))
  }

  input.click()
}

const getFileData = (file) => (
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => (resolve(reader.result))
    reader.onerror = reject

    reader.readAsArrayBuffer(file)
  })
)
