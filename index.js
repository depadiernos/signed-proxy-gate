const jwt = require('jsonwebtoken')

document.querySelector("#valid").addEventListener("click", function(){getValid()})
document.querySelector("#invalid").addEventListener("click", function(){getInvalid()})

const token = jwt.sign({ foo: 'bar' }, 'secret', { algorithm: 'HS256' })
export const getValid = () => {
  console.log('click')
  get(token)
}
export const getInvalid = () => {
  get('')
}
const get = token => {
  fetch('/gated-content', {
    headers: {
      // Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
}
