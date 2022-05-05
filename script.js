"use strict";

//1) To generate array
/*
const arrCreate = function (a, b) {
  const x = [];
  for (let i = 0; i <= a; i++) {
    x.push(b);
  }
  console.log(x);
};
arrCreate(4, "a");

//2) Reverse array

const revArray = function (arr) {
  const y = [];
  console.log(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    y.push(arr[i]);
  }
  console.log(y);
};
revArray([1, 2, 3]);
revArray([5, 6, 7, 4, 5, 6, 3, 4, 56, 7, 88, 99]);

//3) Removing falsy values from array

const truArr = (arr) => arr.filter((ele) => ele);
console.log(truArr([1, 2, null, null, null, false, 4, undefined, 8]));
*/
//4) Object generation from array

// const objArr = (arr) =>
//   arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       acc[curr[0]] = curr[1];
//     }
//     return acc;
//   }, {});
// console.log(
//   objArr([
//     ["a", 1],
//     ["b", 2],
//   ])
// );
/*
//5) Removing listed items from array

const removeEle = function (data, ...args) {
  let filteredArray = [...data];
  for (let i = 0; i < args.length; i++) {
    filteredArray = filteredArray.filter((ele) => ele !== args[i]);
  }
  console.log(filteredArray);
};
removeEle([2, 3, 4, 5, 2, 3], 2, 3);

//6) Removing duplicate elements

const noDup = function (arr) {
  const x = Array.from(new Set(arr));
  console.log(x);
};
noDup([1, 2, 3, 3, 4, 1, 2]);

//7) Array.from

const range = function (start, stop, step) {
  const x = Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
  return x;
};

console.log(
  range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x)
  )
);

//8) Compare array

const isEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
  } else {
    const compared = arr1.map((el, i) => arr2[i] === el);
    console.log(!compared.includes(false));
    // return !compared.
  }
};
isEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

//9) Check element in array
const res = [1, 2, 45, 67, 101].map((el) => el > 100);
console.log(res);
console.log(res.includes(true));

//10) Flatten array

const flatten = function (arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
};

console.log(flatten([1, 2, 2, [1, 3], [[[8]]]]));

//11) Splitting array into chunks

const arrSplit = function (arr, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }
  return chunkedArray;
};

console.log(arrSplit([3, 5, 6, 7, 4, 5, 6, 7, 9, 8, 12], 2));

//12) Finding the common elements in array

const intersection = function (...arr) {
  const result = arr[0].filter((ele) => {
    const inter = arr[1].indexOf(ele);
    if (inter >= 0) {
      return ele;
    }
  });
  if (arr.length > 2) {
    intersection(result, ...arr.slice(2, arr.length));
  }
  return Array.from(new Set(result));
};
console.log(intersection([1, 2, 3], [2, 4, 5]));
*/
//13) Generating object from array
// const getQueryParams = (arr) => {
//   const a = [];
//   arr.forEach((ele) => {
//     const b = ele.split(":");
//     console.log(b);

//     a.push(b);
//   });
//   return a;
// };
// console.log(`${2 + 3}`);
// console.log(``);

//Call Method
/*
const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} has booked a seat on ${this.airline} flight
    ${this.iatacode} ${flightNum}`);
    this.bookings.push({ flightName: `${this.iatacode} ${flightNum}`, name });
  },
};

lufthansa.book(235, "Abhijith SJ");
lufthansa.book(221, "Jeeba");
console.log(lufthansa);

const euroWings = {
  airline: "EuroWing",
  iatacode: "EW",
  bookings: [],
};
/*
const book = lufthansa.book;
//this is possible because in JS functions are called as first class functions

// book(23, "Sarah");
//above code doesnot work coz the this keyword inside a normal function call is
//undefined. So we have to set the this keyword and for that we use call,apply & bind

book.call(lufthansa, 23, "sarah");
console.log(lufthansa);
book.call(euroWings, 22, "Matilda");
console.log(euroWings);

const swiss = {
  airline: "Swiss",
  iatacode: "SW",
  bookings: [],
};
// book.call(swiss, 30, "Hi");
// const [isValid,setIsValid]=useState(true);
// const isValide=useState[0];
// const setIsValid=useState[1];

//apply method
const flightData = [232, "Mary Cooper"];
book.apply(swiss, flightData); //the first parameter is the this object
book.call(swiss, ...flightData); //this is similar as apply above so in modern
//javascript apply is not widely used

//Bind method

const bookEW = book.bind(euroWings);
//here the this keyword points to eurowings and the function it returned is
//similar to normal func and we can call like below
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, "Unknown");

//we can also set multiple parameters to bind

const bookEW23 = book.bind(euroWings, 23);
const bookLH23 = book.bind(lufthansa, 23);
const bookSW23 = book.bind(swiss, 23);
bookEW23("Myself");

//with event listners
lufthansa.planes = 300;
// lufthansa('plane')=200;
lufthansa.buyPlane = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};
// console.log(lufthansa);
// lufthansa.buyPlane();
// lufthansa.buyPlane();

//lufthansa.buyPlane(); //this work as the lufthansa calling the method so the this
//keyword points to lufthansa object, but..
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
//this gives error coz in an event handler function the this keyword points
//to the element on which the listner is attached
//since out of the 3 method we can use only bind coz rest all will never return
//function instead if executes function, which is not we want inside event listner
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// console.log(document.querySelector(".buy"));

const abhi = async function () {
  const res = await fetch("");
};
// microtaks queueMicrotask(promises)
//call back queue
//event loop
//event loop tic
//execution context
console.log("hi");
*/
//Closures
/*
//example 1
const secureBooking = function () {
  let passengerCount = 0; //this variable cant be modified outside.

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking(); //the returning function will be saved in booker
booker();
booker();
booker();
//here even the secureBooking has returned the booker still has access to the varibale
//defined inside the secureBooking. This is closure.
console.dir(booker);
//this returns function where scope represents the variable environment of the booker
//function

//example 2

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 277;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); //here f closes over(wrap) g so its variable environment has g
//reassiging f
h();
f();
console.dir(f); //here f closes over(wrap) h so its variable environment has h

//example 3

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will be boarded in ${wait} seconds`);
};

boardPassengers(180, 3);
const perGroup = 1000; //if we comment the code inside function then perGroup value will
//be taken from the global scope here its 1000. But if we have both variables then
//the value will be taken from the closure coz "CLOSURE HAS PRIORITY OVER SCOPE CHAIN"
*/
/*
//Event delegation
// capturing phase--target pahse--bubbling phase
// event propogates through all the parent elements

//random number
const randomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};
console.log(randomNumber(0, 25));

const randomColor = () =>
  `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(
    0,
    255
  )})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

var temp = "hello";
function display() {
  console.log(temp);
  var temp = "world";
  console.log(temp);
}
display();
*/

//Promises

// SECTION 1
/*
const alpha = new Promise((resolve, reject) => {
  const a = 1 + 3;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
alpha
  .then((message) => {
    console.log("This is inside " + message);
  })
  .catch((message) => {
    console.log("This is inside " + message);
  });
  

// SECTION 2

const x = false;
const y = false;

const usingPromise = function () {
  return new Promise((resolve, reject) => {
    if (x) {
      resolve({
        name: "Abhi",
        string: "Thats good code",
      });
    } else if (y) {
      resolve({
        name: "Sree",
        string: "Thats also good",
      });
    } else {
      reject({
        name: "Unknown",
        string: "No thats not great :(",
      });
    }
  });
};

usingPromise()
  .then((message) => {
    console.log("Succes with " + message.string);
  })
  .catch((error) => {
    console.log(error.name + " " + error.string);
  });
  
*/
/*
// SECTION 3

const a = new Promise((resolve) => {
  resolve("I am first");
});
const b = new Promise((resolve) => {
  resolve("I am second");
});
const c = new Promise((resolve) => {
  resolve("I am third");
});

Promise.all([a, b, c]).then((messages) => {
  console.log(messages);
});
Promise.race([a, b, c]).then((message) => {
  console.log(message);
});
*/

//ASYNC AWAIT

const makeRequest = function (location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi");
    } else {
      reject("We can only talk to google");
    }
  });
};

const processRequest = function (response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information is ${response}`);
  });
};

//Using the .then

makeRequest("Google")
  .then((message) => {
    console.log(`Response received`);
    return processRequest(message);
  })
  .then((content) => {
    console.log(content);
  })
  .catch((err) => {
    console.log(err);
  });

//using Async Await

const newWay = async function () {
  try {
    const res = await makeRequest("Google");
    console.log("Response received");
    const res2 = await processRequest(res);
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
};
newWay();

// function shuffleArray(array) {
//   const a = array.slice(0);
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return { array, a };
// }

// console.log(shuffleArray([2, 3, 3, 5, 63, 3, 34, 3, 23, 3, 53, 53, 2, 3, 3]));

//Count the repetitive elements
/*
const arr = ["abc", "def", "ghi", "ghi", "abc", "abc"];
const multiCheck = function (arr) {
  const a = {};
  const b = [];
  arr.forEach((item) => {
    if (a[item]) {
      a[item] += 1;
      return;
    }
    a[item] = 1;
  });
  console.log(a);

  for (let x in a) {
    if (a[x] >= 1) {
      console.log(`${x} counted ${a[x]} times `);
    }
  }
  // return b;
};
multiCheck(arr);
*/
//Finding the factorial

// const getFactorial = (n) => {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// };
// console.log(getFactorial(4));

//Checking the prime number or not
// const getPrimeCheck = (n) => {
//   let flag = 1;
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       flag = 0;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(`${n} is a prime number`);
//   } else {
//     console.log(`${n} is not a prime number`);
//   }
// };
// getPrimeCheck(20);
