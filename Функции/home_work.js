/*//1 задание
function welcomeUser (welcome, userName) {
    console.log(welcome + userName);
}
let welcome = 'Шалом, дорогой товарищ'
let fName = ' Висусуолий'
welcomeUser (welcome, fName)

//2 задание
function sProd (num1, num2, num3) {
   console.log((num1 + num2) * num3);
}
sProd (1, 3, 6)

//3
function Multy (mass, num) {
    
    for (let i =0; i < mass.length; i++){
    console.log (mass[i] * num);}
}
Multy ([1,2,3,4,5],2)

//4

function joinStrings(arr) {
    // Используем метод join для объединения всех элементов массива в одну строку
    return arr.join('');
}

const myArray = ['Hello', ' ', 'World'];
const joinedString = joinStrings(myArray);
console.log(joinedString);

//5
function filterLongStrings(arr) {
    let result = '';
    for (let str of arr) {
        if (str.length >= 3) {
            result += str + ' ';
        }
    }
    return result
}

const inputArray = ['a', 'bb', 'cccc', 'dddddd', 'eee'];
const outputString = filterLongStrings(inputArray);
console.log(outputString);


//6
function printPersonInfo(person) {
const info = `${person.fName} ${person.lName}, возраст: ${person.age}`;
console.log(info);}
const person = {
    fName: 'Сигизмунд',
    lName: 'Афанасьевич',
    age: 96
}
printPersonInfo(person);


//7
function displayShoppingCart(cartItems) {
    // Проверяем, что массив не пустой
    if (!cartItems || cartItems.length === 0) {
      document.getElementById('shopping-cart').innerHTML = '<p>Корзина пуста.</p>';
      return;
    }
  
    // Создаём HTML разметку для каждого элемента в массиве
    const shoppingCartHTML = cartItems.map(item => {
      return `
        <div class="cart-item">
          <span class="item-title">${item.title}</span>
          <span class="item-quantity">x${item.qty}</span>
          <span class="item-price">$${(item.price  *  item.qty).toFixed(2)}</span>
        </div>
      `;
    });
  
    // Выводим полученную разметку в id "shopping-cart"
    document.getElementById('shopping-cart').innerHTML = shoppingCartHTML.join('');
  }
  
  const cartItems = [
    { title: 'Книга', price: 200, qty: 1 },
    { title: 'Футболка', price: 500, qty: 2 },
  ];
  displayShoppingCart(cartItems);
  */

  //8
  function calculateTotalPrice(basket) {
    let totalPrice = 0;
    basket.forEach(item => {
        const itemPrice = item.price  *  item.qty;
        totalPrice += itemPrice;
    });
    return totalPrice;
}

const basket = [
    { title: 'Товар 1', price: 100, qty: 2 },
    { title: 'Товар 2', price: 200, qty: 1 }
];

console.log('Общая стоимость товаров:', calculateTotalPrice(basket), 'руб');
