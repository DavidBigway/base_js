'use strict'
/* 
Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
*/
const objFromNum = {}
function numToString(num) {
  return num.toString()
}
function numToObj(num) {
  const number = numToString(num)
  if (0 <= num && number.length <= 3) {
    objFromNum.units = Number(number[number.length - 1]) || 0
    objFromNum.tens = Number(number[number.length - 2]) || 0
    objFromNum.hundereds = Number(number[number.length - 3]) || 0
    console.log(objFromNum)
  } else {
    alert('нужно число от 0 до 999')
    return console.log(objFromNum)
  }
}
// numToObj(prompt('число от 0 до 999'))

/* 
 function Product(name, price) {
  this.name = name
  this.price = price
}
Product.prototype.make25PercentDiscount = function (discount = 25) {
  console.log(this.price * (1 - discount / 100))
} 
*/
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  make25PercentDiscount(discount = 25) {
    console.log(this.price * (1 - discount / 100))
  }
}

const prod1 = new Product('спички', 100)
prod1.make25PercentDiscount()

// console.log(prod1)

/* 
function Post(author, text, date){
this.author = author
this.text = text
this.date =date
}
Post.prototype.edit = function(text){
    this.text = text
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false
}
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true
} 
*/
class Post {
  constructor(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
  }
  edit(text) {
    this.text = text
  }
}

class AttachedPost extends Post {
  constructor(author, text, date) {
    super(author, text, date)
    this.highlighted = false
  }
  makeTextHighlighted() {
    this.highlighted = true
  }
}
