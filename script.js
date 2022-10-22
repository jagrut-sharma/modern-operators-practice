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
    starterIndex = 0,
    mainIndex = 1,
    time = '20:30',
    address = 'Italy',
  }) {
    console.log(
      `Hi, your order is received, your order is ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and will be delivered to ${address} on ${time}`
    );
  },
};

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
