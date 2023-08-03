// Napisz skrypt zarządzania formularzem logowania.
//
// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
//
// 1. Funkcjonalność przesyłania formularza "form.login-form"
//    powinno zostać obsłużona przy użycie wydarzenia „submit”
// 2. Podczas przesyłania formularza strona nie powinna się odświeżać.
// 3. Jeśli w formularzu są nieuzupełnione pola, wyświetl „alert”
//    z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// 4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz,
//    pobierz wartość pól jako obiekt, gdzie nazwa pola będzie
//    nazwą właściwości, a wartość pola - wartością właściwości.
//    Aby otrzymać dostęp do elementów formularza
//    użyj właściwości „elements”.
// 5. Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości
//    pól „input” metodą „reset”.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać prawidłowo wypełnione!");
  }

  const dataForm = {
    email: email.value,
    password: password.value,
  };
  console.log(
    `Object = Email: ${dataForm.email}, Password: ${dataForm.password}`
  );
  event.currentTarget.reset();
}
