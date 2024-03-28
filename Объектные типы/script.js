// console.log(console);
// console.log(document);
// console.log(Math);
// console.log(Window);

/*
console.log([1, 2, 3].length);
console.log("hello".length);
*/

/*
let car1 = {
  model: "Ваз 2101",
  maker: "Ваз",
  color: "Синий",
  madeYear: 1990,
  "count tires": 4,
};

//console.log(car1);
// document.write(car1);

// console.log(car1.model);
// console.log(car1.color);
// console.log(car1['count tires']);

// вывод данных из обекта в документ
let output = `<h2 style="color:white">Модель: ${car1.model} Производитель: ${car1.maker} Цвет: ${car1.color} Год выпуска: ${car1.madeYear}</h2>`;
document.write(output);
*/

let student = {
  fName: "Иван",
  lName: "Иванов",
  avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
  age: 22,
  course: 2,
  hobbies: ["Читать", "Гулять", "Плавать"],
  exams: {
    math: 99,
    en: 87,
    lit: 33,
  },
};
// console.log(student);
// console.log(student.lName);
// console.log(student["hobbies"][2]);
// console.log(student.hobbies[2]);
// console.log(student.exams.lit);
/*
let studentStr = `
    <div style="color: white; font-size: 30px">
        <h2>${student.fName} ${student.lName}</h2>
        <img src="${student.avatar}">
        <p>Возраст: ${student.age} лет</p>
        <p>Курс: ${student.course}</p>
        <p>Хобби: ${student.hobbies.join(", ")}</p>
        <p>Экзамены:</p>
        <p>Математика: ${student.exams.math}</p>
        <p>Английский: ${student.exams.en}</p>
        <p>Литература: ${student.exams.lit}</p>
    </div>
`;
document.write(studentStr);
*/

/*
let user1 = {
  userName: "Petr22",
  age: 32,
  getInfo() {
    // метод
    console.log(`Логин: ${this.userName} возраст: ${this.age}`);
  },
};
// вызов метода
user1.getInfo();
*/

/**
 * массивы
 */
/*
let nums = [1, 4, 5, 7, 8, 9];
console.log(nums);
*/

/*
let user1 = "Ivan";
let user2 = user1;
user1 = "Petr";

console.log(user2);
*/

/*
// копирование по ссылке
let nums = [1, 4, 5, 7, 8, 9];
let nums2 = nums;

nums[0] = 10;
console.log(nums2);
*/

// push
/*
let animals = ["tiger", "lion", "elephant", "sheep"];
let newAnimalsLen = animals.push("cow", "rat");
//console.log(animals);


// pop
let lastAnimal = animals.pop();
let lastAnimal2 = animals.pop();
console.log(lastAnimal);
console.log(lastAnimal2);
console.log(animals);
*/

/*
let animals = ["tiger", "lion", "elephant", "sheep"];
animals.shift();
console.log(animals);
*/

// slice
/*
const animals = ["ant", "bison", "camel", "duck", "elephant"];
// let anim2 = animals.slice();
// animals.pop();

let anim2 = animals.slice(1, 4);
console.log(anim2);
*/

// splice - изменяет исходный массив
/*
const animals = ["ant", "bison", "camel", "duck", "elephant"];

let delItems = animals.splice(3, 2, "mouse", "cow");
console.log(delItems);
console.log(animals);
*/

// sort
/*
const animals = ["duck", "ant", "elephant", "bison", "camel"];
animals.sort();
console.log(animals);
*/

/*
let nums = [111, 67, 1, 11, 45, 44];
nums.sort();
console.log(nums);
*/

// по возрастаню
// let nums = [111, 67, 1, 11, 45, 44];
// nums.sort(function (a, b) {
//   return a - b;
// });
// console.log(nums);

/*
nums.sort(function (a, b) {
  return b - a;
});
console.log(nums);*/
