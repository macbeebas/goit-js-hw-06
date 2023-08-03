// Napisz skrypt, który:
// 1. Policzy i wypisze w konsoli liczbę kategorii w ul#categories,
//    czyli elementy li.item.
// 2. Dla każdego elementu li.item na liście ul#categories, znajdzie
//    i wypisze w konsoli tekst nagłówka elementu(tag < h2 >) i liczbę elementów
//    w danej kategorii(wszystkich w jej obrębie < li >).
//
// Po wykonaniu w konsoli znajdą się takie komunikaty.
//
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
//

console.log(
  "Number of categories:",
  document.body.querySelectorAll(".item").length,
  "\n\n"
);

document.body.querySelectorAll(".item").forEach((item) => {
  console.log("Category:", item.firstElementChild.innerHTML);
  console.log("Elements:", item.querySelectorAll("li").length, "\n\n");
});
