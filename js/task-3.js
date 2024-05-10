const userInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

userInput.oninput = ({ target: { value } }) =>
  (output.textContent = value ? value : 'Annonimus');
