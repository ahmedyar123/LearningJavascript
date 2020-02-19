//FUNCTUONS AND SCOPE

//IIFE
//Immediately invoked function expression 
(function () {
    console.log("hell yo!");
})();

//Closures
let app = (function () {
    let cardId = 123;
    let getId = function () {
        return cardId;
    };
    return {
        getId: getId
    };
})();
console.log(app.getId());

//The This Keyword 
let o = {
    cardId: 321,
    getId: function () {
        return this.cardId;
    }
}
console.log(o.getId());

//Call
let p = {
    cardId: 321,
    getId: function () {
        return this.cardId;
    }
}
let newCar = { cardId: 456 };
console.log(p.getId.call(newCar));

//Apply
let q = {
    cardId: 321,
    getId: function (prefix) {
        return prefix + this.cardId;
    }
}
let newNum = { cardId: 456 };
console.log(q.getId.apply(newNum, ['ID: ']));

//Bind
let s = {
    cardId: 321,
    getId: function () {
        return this.cardId;
    }
}
let newBike = { cardId: 789 };
let newFn = s.getId.bind(newBike)
console.log(newFn());

//Arrow Functions
let getId = (prefix, suffix) => prefix + 123 + suffix;
console.log(getId('ID: ', '!'));

let getId1 = (prefix, suffix) => {
    return prefix + 135 + suffix;
};
console.log(getId1('ID: ', '!'));

let getId2 = _ => 123;
console.log(getId2());

//Default Parameters 
let trackCar = function (cardId, city = 'NY') {
    return `Tracking ${cardId} in ${city}.`
}
console.log(trackCar(123))
console.log(trackCar(123, 'chicago'))



