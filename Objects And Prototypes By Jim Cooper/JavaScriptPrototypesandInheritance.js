// JavaScript Prototypes and Inheritance
'use strict'

//Javascript Prototypes 
var arr = ['red', 'blue', 'green'];
var arr1 = ['a', 'b', 'c']

Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length - 1]
    }
})

console.log(arr.last);
console.log(arr1.last);

//ProtoTypes With Classes
class Animal {
    constructor(voice) {
        this.voice = voice || 'Grunt'
    }

    speak() {
        console.log(this.voice)
    }
}

class Cat extends Animal{
    constructor(name, color) {
        super('Meaow')
        this.name = name
        this.color = color
    }
}

var cat = new Cat('Fluffy', 'Blue');

console.log(cat)