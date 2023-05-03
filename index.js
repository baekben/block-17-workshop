// 3. Print an array of all the drinks on the menu.
// Gather the menu from coffee_data.js
const coffeeMenu = require("./coffee_data.js");

// print all the drink names
console.log(
  "All Drinks on the Menu",
  coffeeMenu.map((drink) => drink.name)
);

// 4. Print an array of drinks that cost 5 and under.

const checkPrice = (drink) => {
  if (drink.price <= 5) {
    return drink.name;
  }
};
const under5 = coffeeMenu.filter(checkPrice);
const under5Drinks = under5.map((drink) => drink.name);
// print all drinks 5 and under
console.log("All drinks 5 and under", under5Drinks.sort());

// 5. Print an array of drinks that are priced at an even number.
// set an empty array to hold all drinks at even number price
let evenPriced = [];
// go through each item on the menu
coffeeMenu.forEach((elm) => {
  // if the item's price is even
  if (elm.price % 2 == 0) {
    // add it to the evenPriced array
    evenPriced.push(elm.name);
  }
});
// sort the items in alphabetical order
evenPriced = evenPriced.sort();
// print the array of all the drinks with a price that is an even number
console.log("Drinks priced at an even number: ", evenPriced);

// 6. Print the total if you were to order one of every drink.
// set initial value
initialValue = 0;
// reduce the prices into one price to add up all prices
const totalAmount = coffeeMenu.reduce((total, drink) => {
  total += drink.price;
  return total;
}, 0);

//print the total amount
console.log("Total if you ordered on of every drink", totalAmount);

// 7. Print an array with all the drinks that are seasonal.

let seasonalDrinks = [];
coffeeMenu.forEach((drink) => {
  if (drink.seasonal) {
    seasonalDrinks.push(drink.name);
  }
});

console.log("Drink that are seasonal", seasonalDrinks);

// 8. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const withBeans = coffeeMenu.map(
  (drink) => drink.name + " with imported beans"
);
console.log("Seasonal drinks with imported beans:", withBeans);
