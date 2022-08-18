import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, calculateIMC} from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  inputHeight.value = ''
  inputWeight.value = ''

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const mensage = `Seu IMC é de ${result}`

  Modal.mensage.innerText = mensage
  Modal.open()
}