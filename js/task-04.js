// Licznik składa się z elementu span i przycisków, które,
// po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość
// o jednostkę.
//
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
//
// 1. Utwórz zmienną 'counterValue' w której będzie przechowywana
//    aktualna wartość licznika i nadaj jej początkową wartość '0'.
// 2. Dodaj click listeners do przycisków, i przy ich pomocy
//    zwiększaj i zmniejszaj wartość licznika.
// 3. Aktualizuj interfejs (widok HTML) nową wartością
//    zmiennej 'counterValue' po każdej jej zmianie.

const counterBtn = document.querySelector("#counter");
const btnDecrement = counterBtn.querySelector('[data-action="decrement"]');
const btnIncrement = counterBtn.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");
let counterValue = spanValue.textContent;

btnDecrement.addEventListener("click", () => {
  counterValue--;
  spanValue.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue++;
  spanValue.textContent = counterValue;
});
