const ButtonGenerate = () => {
  const button = document.createElement('button')
  button.type = 'button'
  button.classList.add('btn', 'form__btn-get-gatsby')
  button.setAttribute('id', 'btn-get-template')
  button.textContent = 'Gerar meu Gatsby!'

  return button;
}

export default ButtonGenerate;
