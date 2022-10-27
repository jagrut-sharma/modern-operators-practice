'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderFood: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  deliveryOrder: function ({
    time: deliveryTime = '22:00',
    starterIndex: starterMenuItem = 'Manchurian',
    mainIndex: mainMenuItem,
    address: deliveryAddress = 'Russia',
  }) {
    console.log(
      `Hi, your order, ${this.starterMenu[starterMenuItem]}, ${this.mainMenu[mainMenuItem]} will be delivered to ${deliveryAddress} at ${deliveryTime}. Thanks!`
    );
  },

  orderPasta: function (ingA, ingB, ingC) {
    console.log(`Here is your delicious pasta with ${ingA}, ${ingB}, ${ingC}`);
  },

  orderPizza: function (mainIngredient, ...restIngredient) {
    console.log(mainIngredient);
    console.log(restIngredient);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersThatScored) {
    for (let currPlayer of playersThatScored) console.log(currPlayer);
    console.log(playersThatScored.length);
  },
};

/*
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10;
// rest1.numGuests ||= 30;

// nullish arguments
rest2.numGuests ??= 10;
rest1.numGuests ??= 30;
console.log(rest2.numGuests);
console.log(rest1.numGuests);

// AND logical assigment operator
// rest2.owner = rest2.owner && 'Anonymous';
// rest1.owner = rest1.owner && 'Anonymous';
rest2.owner &&= 'Anonymous';
rest1.owner &&= 'Anonymous';
console.log(rest1);
console.log(rest2);

// Coding challenge

/*
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...restPlayers] = players1;
console.log(gk);
console.log(restPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

team1 < team2 && console.log(`Team-1 is more likely to win.`);
team2 < team1 && console.log(`Team-2 is more likely to win.`);

/*
// Short Circuiting
console.log(`-------------- OR ---------------`);
console.log(3 || 'A String');
console.log(0 || 'A String again'); // Will return second value
console.log(null || undefined); // Both falsy, returns last value
console.log(3 || 0); // Returns 3 as it short circuited

console.log(null || undefined || 0 || '' || 46 || 'abc' || NaN); // 46 => truthy value => shortcircuit

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 15;
console.log(guests2);

// If numGuest = 0, above condition doesn't work. Use nullish coalescing operator in that case.

const guests3 = restaurant.numGuests ?? 15;
console.log(guests3);

console.log(`----------- AND -----------`);
console.log(7 && 'ABC');
console.log(0 && 'DEF');
console.log(7 && 'ABC' && null && 78);

// instead of multiple line function => single line can be used

if (restaurant.orderPizza) {
  restaurant.orderPizza('Tomato', 'cheese', 'Paneer');
}

restaurant.orderPizza &&
  restaurant.orderPizza('Black-Olives', 'Cheese', 'Red Paprika'); // called in single line

// ☝ use only if necessary

/*
// REST Operator ---> 1. Arrays

const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

const [x, , ...y] = arr;
console.log(x, y);

console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);

const [pizza, , risotto, ...otherMenuItems] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherMenuItems);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// REST Operator ---> 2. Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let currNumber of numbers) sum += currNumber;
  console.log(sum);
};

add(3, 5);
add(1, 2, 3, 4, 5);
add(6, 7, 8, 2, 5, 1, 3);

restaurant.orderPizza('Tomato');
restaurant.orderPizza('Tomato', 'Paneer', 'Black Olives');
restaurant.orderPizza('Tomato', 'Cheese', 'Black Olives', 'Pineapple');

/*
// Spread operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
//merge 2 arrays
console.log([...newArr, ...arr]);
console.log(newArr);
console.log(arr);
// Separate elements
console.log(...arr);
console.log(...newArr);

const newMenu = [
  ...restaurant.starterMenu,
  'Paneer Tikka Masala',
  'Manchurian',
];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

// Split string into letters
const str = 'Jagrut';
const letters = [...str, ' ', 'S'];
console.log(letters);

// Can be passed as array

const ingredients = ['Tomato', 'Garlic', 'Spices'];
restaurant.orderPasta(...ingredients);

// creates a shallow copy
const newRestaurant = { Since: 1989, ...restaurant, ownedBy: 'Bakeri group' };
console.log(newRestaurant);

// creates a shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Sher-E Punjab';
console.log(restaurantCopy);
console.log(restaurant);

/*
// Destructuring Objects

// const { name, categories, openingHours } = restaurant; // Properties name must be same
const {
  name: restaurantName = 'Sher-e Punjab',
  categories: menuAvailable = [
    'punjabi',
    'chinese',
    'south indian',
    'kathyawadi',
  ],
  openingHours: duration,
} = restaurant; // Assign your desired name
// console.log(name, categories, openingHours);
console.log(restaurantName, menuAvailable, duration);

let a = 99;
let b = 159;
const obj = { a: 23, b: 46 };
// let {a, b} = obj; // Gives error
({ a, b } = obj); // This will overwrite above variables
console.log(a, b);

// const { fri } = duration;
const {
  fri: { open: openingTime = 12, close: closingTime = 11 },
} = duration;
console.log(openingTime, closingTime);

restaurant.deliveryOrder({
  time: '22:30',
  starterIndex: 2,
  mainIndex: 2,
  address: 'India',
});

restaurant.deliveryOrder({
  starterIndex: 2,
}); // default values will be applied

/*
// const arr = [2, 4, 6, 8];
// const [x, , z] = arr;
// console.log(x, z);

// Destructuring a received result.
let [first, , secondary] = restaurant.categories;
console.log(first, secondary);

// Switch values
[secondary, first] = [first, secondary];
console.log(first, secondary);

// receiving two values from function
const [starterItem, mainItem] = restaurant.orderFood(2, 0);
console.log(starterItem, mainItem);

//nested arrays
const nestedArr = [1, 2, [3, 4, 5]];
const [i, , j] = nestedArr;
console.log(i, j);

const [k, , [l, , n]] = nestedArr;
console.log(k, l, n);

//default value
let sampleArr = [1, 2, 3];
// sampleArr = [5];
const [a = 1, b = 1, , d = 1] = sampleArr; // WIll assign default value as 1, used in API calls
console.log(a, b, d);
*/
