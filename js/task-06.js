// Napisz skrypt, który przy utracie fokusu na polu input
// (zdarzenie blur) sprawdza czy wartość wprowadzona przez
// użytkownika spełnia warunek walidacji
// (ma odpowiednią długość)
//
// <input type="text" id="validation-input"
//  data-length="6" placeholder="Please enter 6 symbols"
// />
//
// - Informacja o liczbie symboli, która powinna znajdować się
//   w polu input, zawarta się w jego atrybucie data-length.
// - Jeśli wprowadzono odpowiednią liczbę symboli,
//   to border pola input staje się zielony, a jeśli liczba
//   jest nieprawidłowa - czerwony.
//
// Aby dodać style, używaj klas CSS valid i invalid,
// które już dodaliśmy do plików źródłowych zadania.
//
// #validation-input { border: 3px solid #bdbdbd; }
//
// #validation-input.valid { border-color: #4caf50; }
//
// #validation-input.invalid { border-color: #f44336; }

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length < textInput.dataset.length) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
});
