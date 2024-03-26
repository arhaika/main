//объявление функции
/*function SayHello () {
    console.log('добрейший вечерочек');
}

//вызов функции
SayHello();*/

/*function getSumm(num1, num2) //num1,2 - параметры функции
 {
    console.log(num1 + num2);
}
getSumm(2, 2);
getSumm(5, 7); */

//получение суммы элементов массива
/*function getArraySum (arrayNum) {
    let sum = 0
    for (let num of arrayNum)
{sum +=num;}
console.log(sum);
}

let nums =[3,5,7,8,2,3]
let bills =[234,567,890, 247, 947]
getArraySum (nums)*/

/*
function getPow(num, pow) {
    let result = num ** pow
    console.log(result);
}
getPow (10) 
*/
/*
//возврат значения из функции
//в теле считаем функцию и возвращаем
function getPow(num, pow) {
    let result = num ** pow
    return result;
}
//работаем со значением за пределами функции
let numPow = getPow(10,2)
console.log(numPow);*/

function doMatch(num1, num2) {
    let sum = num1 + num2;
    let prod = num1 * num2;
    return {summa: sum, product: prod} //  в {} содержится объект. в массиве могут быть объекты и наоборот
    
}
let myMatch = doMatch(5,5)
console.log(myMatch);