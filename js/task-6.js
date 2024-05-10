function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('input[type="number"]'),
};
const onCreate = () => {
  const amount = Number(refs.input.value);
  if (amount < 1 || amount > 101) {
    boxes.textContent = 'Amount must be between 1 and 100';
    refs.input.value = '';
    setTimeout(() => {
      boxes.textContent = '';
    }, 2000);
    return;
  }

  createBoxes(amount);
  refs.input.value = '';
};
const createBoxes = amount => {
  let markup = '';
  const startSize = 30;
  for (let index = 0; index < amount; index += 1) {
    const currentSize = startSize + index * 10;
    markup += `<div style='width: ${currentSize}px; height: ${currentSize}px; background: ${getRandomHexColor()}'></div>`;
  }

  boxes.innerHTML = markup;
};
const destroyBoxes = () => {
  boxes.innerHTML = '';
};

refs.btnCreate.onclick = onCreate;
refs.btnDestroy.onclick = destroyBoxes;
