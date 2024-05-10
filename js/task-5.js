function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const output = document.querySelector('.color');
const body = document.querySelector('body');

const changeColor = () => {
  const currentColor = getRandomHexColor();
  output.textContent = currentColor;
  body.style.background = currentColor;
};

btn.onclick = changeColor;
