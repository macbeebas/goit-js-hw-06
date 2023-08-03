// W HTML znajduje się pusta lista ul#ingredients.
//
// <ul id="ingredients"></ul>
//
// W JavaScript znajduje się tablica ciągów.
//
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
//
// Napisz skrypt, który dla każdego elementu tablicy ingredients:
// 1. Utworzy oddzielny element <li>.
//    Obowiązkowo użyj metody document.createElement().
// 2. Doda nazwę elementu (string z tablicy)
//    jako jego zawartość tekstową.
// 3. Doda do elementu klasę item.
// 4. Następnie jedna operacja umieści
//    wszystkie <li> na liście ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.body.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const elemLi = document.createElement("li");
  elemLi.className = "item";
  elemLi.textContent = ingredients[i];
  ingredientsList.append(elemLi);
}
