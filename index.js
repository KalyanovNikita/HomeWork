// №3 Условные операторы, логические
// операторы, switch-case, циклы

// ЗАДАНИЕ 1 Работа с if-else

// 1 Если переменная a равна нулю

// let a = 0;

// if (a == 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = 1;

// if (a == 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = -3;

// if (a == 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// 2 Если переменная a больше нуля

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// if (a > 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 3 Если переменная a меньше нуля

// let a = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// if (a < 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 4 Если переменная a больше или равна нулю

// let a = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 5 Если переменная a меньше или равна нулю

// let a = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// if (a <= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 6 Если переменная a не равна нулю

// let a = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно
// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3>

// if (a != 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 7 Если переменная a равна 'test'

// let a = "test";

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// let a = "тест";

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = 3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// if (a == "test") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 8 Если переменная a = '1' и по значению, и по типу

// let a = "1";

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// let a = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = 3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// if (a === "1") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// ЗАДАНИЕ 2 Работа с логическими переменными

// 1 Если переменная test равна true

// let test = true;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// let test = false;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// if (test == true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 2 Если переменная test не равна true

// let test = true;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let test = false;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// if (test != true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// ЗАДАНИЕ 3 Работа с && (и) и || (или)

// 1 Если a больше нуля и меньше 5

// let a = 5;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = 2;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 2 Если a равна нулю или двум

// let a = 5;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = 0;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// let a = -3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// let a = 2;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// if (a == 0 || a == 2) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 3 Если a меньше или равна 1, а b больше или равна 3

// let a = 1;
// let b = 3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// 4

// let a = 0;
// let b = 6;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// 6

// let a = 3;
// let b = 5;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// -2

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// 4 Составное условие с || и двумя &&

// let a = 5;
// let b = 10;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// let a = 1;
// let b = 10;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Верно

// let a = 1;
// let b = 2;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// Неверно

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// ЗАДАНИЕ 4 Работа со switch-case

// 1 Переменная num принимает значения 1, 2, 3 или 4

// let num = 1;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// зима

// let num = 2;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// весна

// let num = 3;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// лето

// let num = 4;

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// осень

// let result;

// switch (num) {
//   case (num = 1):
//     result = "зима";
//     break;
//   case (num = 2):
//     result = "весна";
//     break;
//   case (num = 3):
//     result = "лето";
//     break;
//   case (num = 4):
//     result = "осень";
//     break;
// }

// console.log(result);

// ЗАДАНИЕ 5 Общие задачи

// 1 Декада месяца

// let day = 1;

// if (day > 0 && day < 11) {
//   console.log("Первая декада");
// } else if (day > 10 && day < 21) {
//   console.log("Вторая декада");
// } else if (day > 20 && day <= 31) {
//   console.log("Третья декад");
// } else {
//   console.log("Неверное значение");
// }

// 2 Пора года

// let month = 1;

// if (month == 12 || month == 1 || month == 2) {
//   console.log("Зима");
// } else if (month >= 3 && month <= 5) {
//   console.log("Весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("Лето");
// } else if (month >= 9 && month <= 11) {
//   console.log("Осень");
// } else {
//   console.log("Неверное значение");
// }

// 3 Первый символ строки

// let string = "abcde";

// switch (string[0]) {
//   case "a":
//     console.log("Да");
//     break;
//   default:
//     console.log("Нет");
//     break;
// }

// ЗАДАНИЕ 6 Циклы while и for

// 1 Выведите столбец чисел от 1 до 100

// for (a = 1; a <= 100; a++) {
//   console.log(a);
// }

// 2 Выведите столбец чисел от 11 до 33

// for (a = 11; a <= 33; a++) {
//   console.log(a);
// }

// 3 Выведите столбец чётных чисел в промежутке от 0 до 100

// for (a = 0; a <= 100; a += 2) {
//   console.log(a);
// }

// 4 С помощью цикла найдите сумму чисел от 1 до 100

// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// 4950

// ЗАДАНИЕ 7 Задачи общие

// 1 Делим число на 2, пока результат меньше 50

// let n = 1000;

// let count = 0;

// while (n >= 50) {
//   n = n / 2;
//   count = count + 1;
//   console.log(n);
// }

// console.log(count);

// PS C:\Users\Никита\Desktop\Домашнее занятие по NODE JS\ДЗ3> node index.js
// 500
// 250
// 125
// 62.5
// 31.25

// 5 количество итераций
