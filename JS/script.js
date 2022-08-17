import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
// Variables 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  //Reseta os inputs quando fechar o botão
  inputHeight.value = ''
  inputWeight.value = ''

  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError){
    AlertError.open()
    return
  }

  AlertError.close()

  const result = IMC(weight, height)
  const mensage = `Seu IMC é de ${result}`

  Modal.mensage.innerText = mensage
  Modal.open()
  Modal.closeError()
}

function notNumber(value) {
  return isNaN(value) || value == ''
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}