"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Display Balance

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

// Display Summary

const displaySummary = function (movements) {
  const incomes = movements.filter((mov) => mov > 0).reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = movements.filter((mov) => mov < 0).reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * 1.2) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = `${interest}€`;
};

displaySummary(account1.movements);

// Display Movements

containerMovements.innerHTML = "";

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};

createUsername(accounts);
console.log(accounts);

//Event Handler
btnLogin.addEventListener("click", function (e) {
  //Prevent form from submitting
  e.preventDefault();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 8000, 450, -400, 3000, -650, -130, 70, 1300];

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-2));

// for (const movement of movements) {
//   if (movement < 0) {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   } else {
//     console.log(`You deposited ${movement}`);
//   }
// }

// -------------FOREACH-----------------

// console.log(`=======FOREACH=======`);

// movements.forEach(function (movement, index, array) {
//   if (movement < 0) {
//     console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
//   } else {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// const uniqueCurrencies = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// const eurToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

// console.log(movements);
// console.log(movementsUSD);

/////////////////////////////////////////////////

// const user = "";

// const username =
// console.log(username);

///////////////////////////////////////////////////////

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`ITERATION NO ${i + 1}: ${acc}`);

//   return acc + curr;
// }, 0);

// console.log(balance);

const max = movements.reduce((acc, curr) => (acc > curr ? acc : curr), movements[0]);

console.log(max);

const accountFind = accounts.find((acc) => acc.owner === "Sarah Smith");

console.log(accountFind);
