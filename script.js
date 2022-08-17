// Variables 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Estruturando dados no Modal
const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  mensage: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  //function como shorthand
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  //Reseta os inputs quando fechar o botão
  inputHeight.value = ''
  inputWeight.value = ''

  const result = IMC(weight, height)
  const mensage = `Seu IMC é de ${result}`

  Modal.mensage.innerText = mensage
  Modal.open()
}

Modal.buttonClose.onclick = () => Modal.close()

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}