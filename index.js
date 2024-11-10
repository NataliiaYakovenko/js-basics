//Завдання на змінні:
/*1)Створіть дві змінні a  та b, 
присвойте їм довільні числові значення. 
Виведіть у консоль результат їх множення.*/
const a = 25;
const b = 5;
const sum1 = a * b;
console.log(sum1);

/*2)Створіть дві змінні c  та d, 
присвойте їм довільні числові значення. 
Виведіть у консоль результат ділення першого на друге.*/
const c = 100;
const d = 2;
const sum2 = c / d;
console.log(sum2);

/*3) Створіть дві змінні e  та f, 
присвойте їм довільні значення. 
Виведіть у консоль результат їхньої суми*/
const e = 10;
const f = 10;
const sum3 = e + f;
console.log(sum3);

/*4) Визначте змінні зі значеннями 
11, true, "java script", "100"  
і виведіть їх в консоль*/
const value1 = 11;
console.log("typeof value1:", typeof value1);

const value2 = true;
console.log("typeof value2:", typeof value2);

const value3 = "java script";
console.log("typeof value3:", typeof value3);

const value4 = "100";
console.log("typeof value4:", typeof value4);

/* 5) Переробіть наведений код так, 
щоб у ньому використовувалися операції
 +=, -=, *=, /=, ++, -- */
let num1 = 1;
num1 += 11;
console.log(num1);

let num2 = 1;
num2 -= 11;
console.log(num2);

let num3 = 1;
num3 *= 11;
console.log(num3);

let num4 = 1;
num4 /= 11;
console.log(num4);

let num5 = 1;
num5++;
console.log(num5);

let num6 = 1;
num6--;
console.log(num6);

/*Завдання на введення/виведення
 (вводити з допомогою prompt, 
 виводити з допомогою alert):*/
/*1) Запитати число у користувача,
 піднести його до квадрату і вивести результат.*/
let number1 = Number(prompt("Write number"));
alert(number1 ** 2);

/*2) Вивести середнє арифметичне двох чисел. 
 Числа запитувати у користувача.*/
let number2 = Number(prompt("First number"));
let number3 = Number(prompt("Second number"));
alert((number2 + number3) / 2);


/*3) Перевести кількість хвилин на секунди та вивести результат. 
 Число хвилин запитувати у користувача.  */
let minutes = Number(prompt("Write minutes"));
let seconds = minutes * 60;
alert(minutes + " minutes = " + seconds + " seconds.");


/*4) Створіть змінну greeting зі значенням 'Hello,'
  і оголосіть змінну userName. 
  Запитайте ім'я користувача та внесіть це значення у змінну userName. 
  Виведіть повідомлення з привітанням, наприклад, 'Hello, Alex!' 
  (згадайте про конкатенацію) */
const greeting = "Hello, ";
const userName = prompt("What is your name?");
alert(greeting + userName + '!');

