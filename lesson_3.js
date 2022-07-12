/* 
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let i = 0
while (i <= 100) {
  console.log(i)
  i++
}

/* 
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.
-- я так понимаю, что это превью было --

Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
const products = [
  {
    id: 1,
    name: 'пакет',
    price: 2,
  },
  {
    id: 2,
    name: 'спички',
    price: 5,
  },
  {
    id: 3,
    name: 'спиртовка',
    price: 100,
  },
]
const basket = []
const cartBTN = document.querySelectorAll('.addToCartBtn')
const countFullCart = document.querySelector('.cart').children[1]

const countBasketPrice = (basket) => {
  const productsPrice = basket.map((product) => {
    return product.price
  })
  const sum = productsPrice.reduce((prev, current) => prev + current)
  countFullCart.innerHTML = sum
}

const countProdunctPrice = (id, count) => {
  const product = products.filter((product) => product.id === Number(id))
  cartBTN[id - 1].parentNode.children[3].innerHTML = count
  return product[0].price * count
}

const addToCart = (e) => {
  const id = e.target.attributes[0].nodeValue
  const product = products.find((product) => {
    return product.id === Number(id)
  })
  basket.push(product)
  calculateCart(basket, id)
}

const calculateCart = (basket, id) => {
  const filtredProducts = basket.filter((product) => {
    return product.id === Number(id)
  })
  countProdunctPrice(filtredProducts[0].id, filtredProducts.length)
  countBasketPrice(basket)
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < cartBTN.length; i++) {
    cartBTN[i].addEventListener('click', addToCart)
  }
})

/* 
не совсем понял про вывод значений без тела, но думаю, что так
*/
for (let i = 0; i < 10; i++) {}

/* 
пирамида
*/
let x = ''
for (let i = 0; i < 20; i++) {
  console.log((x += 'x'))
}
