//addlert("Hello");

/*
try {
  alert("Hello");
} catch (error) {
  console.log("Что-то пошло не так");
  console.log(error.message);
  throw "Error";
} finally {
  console.log("Выполняется в любом случае");
}
*/

/**
 * регулярные выражения
 */

// поиск
/*
let str = "Беги, Форест, беги, беги!!!";

console.log(str.match(/беги/gi));
console.log(str.match(/беги/i));
*/

// замена
/*
let str = "Я изучаю JS, мне нравится JS";

console.log(str.replace(/JS/i, "JAVA"));
console.log(str.replace(/JS/gi, "JAVA"));
*/

// проверка
/*
// проверяем, есть JS в строке
let str = "Я изучаю JS";
let regExp = /JS/i;

console.log(regExp.test(str));
*/

/*
let str = "Я изучаю JS";
let regExp = /^JS/i; // строка должна начинаться с JS

console.log(regExp.test(str));
*/

/*
let str = "Я изучаю JS!";
let regExp = /JS$/i; // строка должна заканчиваться на JS

console.log(regExp.test(str));
*/

/*
let str = "JS Я изучаю JS";
let regExp = /^JS$/i; // строка должна содержать только JS

console.log(regExp.test(str));
*/

// проверка логина пользователя
// логин должен начинаться с буквы и состоять только из латинских букв и цифр длиной не менее 3
/*
let str = "Ivan333";
let regExp = /^[a-z][a-z0-9]{2,10}$/i;

console.log(regExp.test(str));
*/

/**
 * работа со строками
 */

//let message = "Hello, spring";

/*
for (let char of message) {
  console.log(char.toUpperCase());
}
*/

/*
let fName = "petr";
fName[0] = "P";

console.log(fName);
*/

/*
let fName = "анна";
console.log(fName[0].toUpperCase() + fName.slice(1));
*/

/*
let str = "логин должен начинаться с буквы, и состоять только из латинских букв и цифр длиной не менее 3";

let newArr = str.split(" ");
console.log(newArr);
*/

/*
let fName = "анна";
console.log(fName.split(""));
*/

/*
const nums = [1, 2, 3, 4];

nums.pop();
nums.push(5);
console.log(nums);

nums = [5, 2, 5, 6, 8];
*/

/**
 * REST API
 */
/*
async function getData() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await response.json();
  //   console.log(data);

  data.forEach(function (post) {
    document.write(`<div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>`);
  });
}

getData();
console.log("hello");
*/

/*
async function getData() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`);
  let data = await response.json();
  console.log(data);

  data.forEach(function (post) {
    document.write(`<div class="post">
                          <h2>${post.title}</h2>
                          <img src="${post.url}">
                      </div>`);
  });
}

getData();
*/

let container = document.querySelector(".country"); // получаю элемент для вставки

async function getData(country) {
  let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let data = await response.json();

  data = data[0];
  console.log(data);

  let output = `
    <img src="${data.coatOfArms.svg}">
    <h2>${data.translations.rus.common}</h2>
    <p>Население: ${data.population} чел.</p>
    <p>Площадь: ${data.area} кв.км</p>
  `;

  // вставляем данные в контейнер на странице
  container.innerHTML = output;
}

getData("eesti");
