//New ES6 Syntax

//Let, Const & Block Scping
let a = 2;
{
  a = 3;
}
console.log(a);
//Arrow functions
var ahmed = () => 9;
console.log(ahmed());

//Default Functions Parameters
//Default function
var getTotal = function(price = adjustment, adjustment = 1) {
  console.log(price + adjustment);
};
getTotal(1);
//Dynamic function
var getTotal = new Function("price = 5", "return price;");
console.log(getTotal());

//Rest And Spread
//Rest
var showCategories = function(productId, ...categories) {
  console.log(categories instanceof Array);
};
showCategories("123", "search", "advertising"); // True

var showCategories1 = function(productId, ...categories) {
  console.log(categories);
};
showCategories1(123); // []

var showCategories2 = function(productId, ...categories) {};
console.log(showCategories2.length); //1

var showCategories3 = function(productId, ...categories) {
  console.log(arguments.length);
};
showCategories3("123", "search", "advertising"); // 3

var showCategories4 = new Function("...categories", "return categories;");
console.log(showCategories3("search", "advertising"));

//Spread
var prices = [12, 23, 12];
var maxPrice = Math.max(...prices);
console.log(maxPrice); //23

var maxCode = Math.max(..."65432");
console.log(maxCode); //6

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray); //["A", "B", "C", "D", "E"]

//Object Literal Extension
var pricee = 5.99,
  quantity = 10;
var productView = {
  pricee,
  quantity,
  calculataValue() {
    return this.pricee * this.quantity;
  }
};

console.log(productView.calculataValue()); //59.900000000000006

var pricee1 = 5.99,
  quantity1 = 10;
var productView1 = {
  pricee,
  quantity,
  calculataValue() {
    return this.pricee * this.quantity;
  }
};

console.log(productView1["calculataValue"]()); //59.900000000000006

var field = "dynamic field";
var pricee2 = 59.5;
var productView2 = {
  [field]: pricee2
};
console.log(productView2); //{dynamic field: 59.5}

var ident = "productId";
var productView3 = {
  get [ident]() {
    return true;
  },
  set [ident](value) {}
};
console.log(productView3.productId); //true

//For of loops
var categories1 = ["a", "v", "d", "dw"];
for (const item of categories1) {
  console.log(item); //a v d dw
}

var codes = "ABCDEF";
var count = 0;
for (var code of codes) {
  count++;
}
console.log(count); //6

//Octal and Binary literals
var value = 0o10;
console.log(value); //8

var value1 = 0b10;
console.log(value1); //2

//Template Literals
let invoiceNum = "1234";
console.log(`Invoice Number: ${invoiceNum}`); //Invoice Number : 1234

let message = `A
B
C`;
console.log(message); //A
//B
//C

//Destructing
let salary = ["32000", ["50000", "80000"]];
let [low, [medium, high]] = salary;
console.log(medium); //50000

let salary1 = ["32000", "50000", "80000"];
let low1, medium1, high1, extraHigh;
[low, medium, high, extraHigh = "100000"] = salary1;
console.log(extraHigh); //100000

function reviewSalary([low2, average], high = "499933") {
  console.log(average);
}
reviewSalary(["3232", "33232"]); // 33232

let Salary3 = {
  low3: 2242,
  average3: 332121,
  high3: 232434
};
let { low3, average3, high3 } = Salary3;
console.log(average3); //332121

let [maxCodee, minCodee] = "AZ";
console.log(`min ${minCodee} max: ${maxCodee}`); //min Z max: A

//Advanced Destructuring
for (const [a, b] of [[5, 10]]) {
    console.log(`${a},${b}`); //5, 10
}
