// Napisz skrypt, który zmienia kolor tła elementu "<body>"
// (poprzez style inline) po kliknięciu na "button.change - color"
//  i wyświetla wartość koloru w "span.color".
//
// Aby wygenerować losowy kolor użyj funkcji "getRandomHexColor".

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  colorSpan.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorSpan.textContent;
});
