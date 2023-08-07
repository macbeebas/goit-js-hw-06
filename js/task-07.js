// Napisz skrypt, który reaguje na zmianę wartości elementu
// "input#font - size - control" (zdarzenie "input")
// i zmienia styl inline "span#text" aktualizując właściwość
// "font-size". W rezultacie, podczas zmiany wartości suwakiem,
// ma zmieniać się rozmiar tekstu w elemencie "span"
//
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const rangeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  spanText.style.fontSize = rangeInput.value + "px";
});
