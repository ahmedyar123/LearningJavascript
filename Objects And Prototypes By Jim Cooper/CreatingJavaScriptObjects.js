'use strict';

//Dynamic Nature
var cat = {
    name: 'fluffy',
    color: 'pink',
    speak: function () { console.log('meeaoow') }
}

cat.age = 2;

cat.speak();
console.log(cat.age);

//Constructor Functions
function Cat(name, color) {
    this.name = name
    this.color = color
}

var cat = new Cat("kazim", 'Red');

console.log(cat)

//Class
class Cat1 {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    speak() {
        console.log('meaaoww')
    }
}

var cat1 = new Cat1("kazim1", 'Red1');

console.log(cat1)
cat1.speak();