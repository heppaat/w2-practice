/* let myObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: 14,
  key5: ["pali", "imola"],
};

console.log(myObj.key5[0]); */

/* let myFacebook = {
  name: "Ricsi",
  age: 28,
  location: "Budapest",
  friends: ["Jakab", "Jozsi"],
  favoriteMovies: [
    { title: "Harry Potter", year: 2001 },
    { title: "Shining", year: [{ first: 1987 }, { second: 2000 }] },
  ],
};

console.log(myFacebook.favoriteMovies[1].year[1]); */

/* function negativeOrPositive(number) {
  if (number < 0) {
    return "negative";
  } else if (number > 0) {
    return "positive";
  } else {
    return 0;
  }
} */

function logger(text) {
  console.log(text);
}

function decideIfBeerIsGood(beer) {
  if (beer.price < 340 && beer.abv > 4.7) {
    return true;
  } else {
    return false;
  }
}

let dreher = { name: "Dreher", price: 349, abv: 5 };
let soproni = { name: "Soproni", price: 329, abv: 4.5 };
let borsodi = { name: "Borsodi", price: 339, abv: 4.8 };

logger(decideIfBeerIsGood(dreher));
logger(decideIfBeerIsGood(soproni));
logger(decideIfBeerIsGood(borsodi));
