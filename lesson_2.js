/* 
Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3

1. ++a прибавляет 1 к a, потом присваивает к c, получаем 2
2. b++ присваивает b к d, потом увеличивает значение b на 1
3. к 2 прибавляем 1 + 2 (так как a уже 2 из п.1)
4. к 2 прибавляем 2 (из п.2 так как значение b уже увеличилось), аналогия с п.2, значение присвоилось, но увеличится после 
5. в п.3. значение а стало 3
6. после присвоения в п.4. значение b также увеличилось.
*/

/* 
 Чему будет равен x?
var a = 2;
var x = 1 + (a *= 2);

Равняется 5, так как в скобках происходит умножение значения a на 2 и присваивания к а
*/

/* 
Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
© geekbrains.ru 11
o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/
let a = Number(prompt('первое число'))
let b = Number(prompt('второе число'))
if (Number(a) && Number(b)) {
  if (a > 0 && b > 0) console.log(a - b)
  if (a < 0 && b < 0) console.log(a * b)
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) console.log(a + b)
} else {
  console.log('введите числа')
}

/* 
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.
*/
let a1 = Number(prompt('ввести значение до 15'))
if (a1 >= 0 && a1 <= 15) {
  switch (a1) {
    case 0:
      console.log('0 - 15')
      break
    case 1:
      console.log('1 - 15')
      break
    case 2:
      console.log('2 - 15')
      break
    case a1:
      console.log(`от ${a1} до 15`)
      break
  }
  /* другой способ способ
   for (i = a1; i <= 15; i++) {
    console.log(i)
  } */
} else console.log('введите число в диапазоне от 0 до 15')

/* 
Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.
*/
// const sum = (a, b) => return a + b
function sum(a, b) {
  return console.log(a + b)
}
function dif(a, b) {
  return console.log(a - b)
}
function mult(a, b) {
  return console.log(a * b)
}
function div(a, b) {
  return console.log(a / b)
}

/* 
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/
let arg1 = prompt('первое число')
let arg2 = prompt('второе число')
let operation = prompt('выберите одну из операций (sum, dif, mult, div)')
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'sum':
      sum(arg1, arg2)
      break
    case 'dif':
      dif(arg1, arg2)
      break
    case 'mult':
      mult(arg1, arg2)
      break
    case 'div':
      div(arg1, arg2)
      break

    default:
      console.log('что-то не так')
      break
  }
}

/* 
null != 0 так как null не является каким либо значением, означает пустоту, а 0 может быть 0 \ false
естественно и по типу не пододет. typeof null === объект
*/

/* 
 С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень
*/
let val = prompt('Число, которе возводите в степень:')
let pow = prompt('Степень')
function powFunc(val, pow) {
  if (pow === 0) {
    return 1
  }
  if (pow === 1) {
    return val
  } else {
    return val * powFunc(val, pow - 1)
  }
}
console.log(val, pow)
