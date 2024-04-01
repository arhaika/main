// let nums = [1, 2, 3];
// console.log(nums);

// получаем элемент
// let header = document.querySelector('h1');
// console.dir(header);
/*
let user = {
  fName: "Иван",
  lName: "Иванов",
};
*/

// конструктор
// 1 создает пустой объект
// 2 создает указанные свойства объекта и дает возможность
// присвоить свойствам объекта значения параметров функции
// 3 возвращает созданный объект
// 4 создает прототип для объекта
let User = function (fName, lName, age, group) {
  // свойства будущего объекта
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.group = group;

  // методы - не делайте так
  /*
  this.printName = function () {
    console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}`);
  };*/
};
/*
// создаем объекты по шаблону функции-конструктора
let user1 = new User("Иван", "Иванов", 16, 45);
let user2 = new User("Анна", "Петрова", 17, 43);

// записываем в прототип метод
User.prototype.printName = function () {
  console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}`);
};

console.log(user1);
console.log(user2);
//console.log(User.prototype);

// вызываем метод из ПРОТОТИПА - родителя
user1.printName();
user2.printName();
*/

/**
 * Классы
 */
class Student {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  printName() {
    return this.fName;
  }

  getUserInfo() {
    return `<h1>Имя: ${this.fName}. Фамилия: ${this.lName}. Возраст: ${this.age} лет.</h1>`;
  }
}

// создаем объект по шаблону класса
let student1 = new Student("Анна", "Петрова", 22);
let student2 = new Student("Светлана", "Иванова", 19);

//console.log(student1);
//console.log(student2);

// console.log(`Имя: ${student1.printName()}!`);
// console.log(student1.fName);

//let usserData = student2.getUserInfo();
//document.write(usserData);

// дочерний класс
class NewStudent extends Student {
  constructor(fName, lName, age, schoolNumber) {
    super(fName, lName, age); // вызываю конструктор родительского класса
    this.schoolNumber = schoolNumber;
  }

  // переопределяем метод родительского класса
  getUserInfo() {
    //return `${super.getUserInfo()} Номер школы: ${this.schoolNumber}.</h1>`;
    return `<h1>Имя: ${this.fName}. Фамилия: ${this.lName}. Возраст: ${this.age} лет.
    Номер школы: ${this.schoolNumber}.</h1>`;
  }
}

let student3 = new NewStudent("Сергей", "Иванов", 15, 43);
//console.log(student3);
//document.write(student3.getUserInfo());
/*
let students = [student1, student2, student3];
console.log(students);

students.forEach(function (student) {
  document.write(student.getUserInfo());
});
*/

/**
 * switch / case
 */

/*
let rating = 3;

switch (rating) {
  case 1:
    console.log("Плохой рейтинг");
    break;
  case 2:
    console.log("Нормальный рейтинг");
    break;
  case 3:
    console.log("Отличный рейтинг");
    break;
  default:
    console.log("Некорректное значение");
}
*/

/*
let arr = ["Киви", "Ананас", "cat", "dog", "camel", "duck"];

arr.forEach(function (arrEl) {
  switch (arrEl) {
    case "Киви":
    case "Ананас":
      console.log("Фрукт");
      break;
    case "cat":
    case "dog":
      console.log("Домашнее животное");
      break;
    case "camel":
    case "duck":
      console.log("Дикое животное");
      break;
    default:
      console.log("Элемент не распознан");
  }
});
*/
