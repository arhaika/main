// 1 объявление функции
// function sayHi() {
//   console.log("Hi");
// }

// 2 вызов функции
// sayHi();
// sayHi();
// sayHi();
// sayHi();

/*
let userName = "Иван";
console.log(userName);
console.log(userName.length); // получаем длину строки
console.log(userName[0]);
*/

/*
function getSum() {
  console.log(2 + 2);
}
getSum();
getSum();
getSum();
getSum();
*/

// num1, num2 - параметры функции
/*
function getSum(num1, num2) {
  console.log(num1 + num2);
}

getSum(2, 2);
getSum(5, 5);
getSum(43, 78);
*/

/*
let age = "hello";
console.log(typeof age);
*/

/*
// функция для получения суммы элементов массива
function getArraySum(arrayNum) {
  let sum = 0;
  for (let num of arrayNum) {
    sum += num;
  }
  //console.log(typeof sum);
  if (typeof sum === "number") {
    console.log(sum);
  } else {
    console.log("Внимание! В массиве есть элемент не числового типа'!!");
  }
}

let nums = [3, 5, 6, 8, 2, 3];
let bills = [234, 645, 234, 767, 234];

getArraySum(nums);
getArraySum(bills);
*/

/*
function getProduct(num1, num2) {
  let result = num1 * num2; // num1 = 10, num2 = undefined; 10 + undef
  console.log(result);
}

getProduct(10);
*/

/*
function getPow(num, pow = 1) {
  let result = num ** pow;
  console.log(result);
}

getPow(10);
getPow(10, 5);
getPow(32);
*/

/*
function getPow(pow = 1, num) {
  let result = num ** pow;
  console.log(result);
}

getPow(10);
*/

/**
 * возврат значения из функции
 */
/*
function getPow(num, pow) {
  let result = num ** pow;
}

getPow(10, 2);
getPow(2, 2);

console.log(result);*/

/*
function getPow(num, pow) {
  let result = num ** pow;
  return result;
}

let numPow = getPow(10, 2);
console.log(numPow);
console.log(numPow * 5);
*/

/*
// посчитать сумму и произведение двух чисел
function doMath(num1, num2) {
  let sum = num1 + num2;
  let prod = num1 * num2;

  return [sum, prod];
}

let myMath = doMath(5, 5);
console.log(myMath);
*/

/*
// посчитать сумму и произведение двух чисел
function doMath(num1, num2) {
  let sum = num1 + num2;
  let prod = num1 * num2;

  // возвращаем ОБЪЕКТ
  return { summa: sum, product: prod };
}

let myMath = doMath(5, 5);
console.log(myMath);

//let student = ["Иван", "Иванов", 22, 2, true];
// объект
let student = {
  fName: "Иван",
  lName: "Иванов",
  age: 22,
  cource: 2,
  isAdmin: true,
};
*/

/*
// массив объектов
let cart = [
  {
    title: "Пианино",
    price: 321,
    qty: 3,
  },
  {
    title: "Дудка",
    price: 123,
    qty: 6,
  },
  {
    title: "Флейта",
    price: 654,
    qty: 1,
  },
];
console.log(cart);
*/

/*
let student = {
  fName: "Иван",
  lName: "Иванов",
  age: 22,
  cource: 2,
  isAdmin: true,
};

console.log(student);
console.log(student.fName);
console.log(student.lName);
*/

/**
 * область видимости
 */
/*
// получаю заголовок со страницы
let header = document.querySelector("h1");
//console.log(header);

function changeText() {
  // меняем текст элемента
  header.textContent = "Hello";
}
changeText();
*/

/*
let userName = "Ivan123";

function greetUser() {
  console.log(`Hello, ${userName}`);
}
greetUser();*/

/*
let userName = "Ivan123";

function greetUser() {
  let userName = "Petr444";
  console.log(`Hello, ${userName}`);
}
greetUser();
*/

/*
let age = 33;
if (age >= 18) {
  let result = "Проходи";
} else {
  let result = "Стоп";
}
console.log(result);
*/

/*
let age = 33;
let result;
if (age >= 18) {
  result = "Проходи";
} else {
  result = "Стоп";
}
console.log(result);
*/

/*
const PI = 3.14;
const fName = "Иван";
fName = "Петр";
*/

/**
 * функциональное выражение
 */
//1
/*
// определение функции
// вызываю
getUserInfo();
// объявляю
function getUserInfo() {
  console.log("User1");
}
*/

// функциональное выражение
/*
let getUserInfo = function () {
  console.log("User1");
};
getUserInfo();
*/

/*
let getUserInfo = function () {
  return "User1";
};
let test = getUserInfo();
console.log(test);*/

/*
// передача функции как значения
// getUserInfo() - вызов функции
// getUserInfo - передача функции как значения
let getUserInfo = function () {
  return "User1";
};
let test = getUserInfo;
console.log(test());
*/
