//OBJECTS AND ARRAYS

//Constructor Function
function Car() {
    console.log(this);
}
let newCar = new Car(); //Empty Object 

function Car1(id) {
    this.cardId = id;
    this.start = function () {
        console.log('Start: ' + this.cardId)
    }
}

let Vehicle = new Car1(123);
Vehicle.start(); //Start: 123

//ProtoTypes
function Car2(id) {
    this.cardId = id;
}
Car2.prototype.start = function () {
    console.log('srart: ' + this.cardId);
};
let car = new Car2(321);
car.start(); //Start: 321

//String.prototype
String.prototype.hello = function () {
    return this.toString() + ' Hello';
}
console.log('foo'.hello()); //foo Hello

//JSON - JavaScript Object Notation 

//Converting to Json
let cardIds = {
    id: 123,
    Name: [
        {
            name1: "ahmed",
            name2: "Kazim"
        },
        {
            name1: "khalil",
            name2: "izhan"
        }
    ]
}
console.log(JSON.stringify(cardIds));
//{"id":123,"Name":[{"name1":"ahmed","name2":"Kazim"},{"name1":"khalil","name2":"izhan"}]}

//Parsing Json
let jsonIn =
    `[
        {"car1" : 123},
        {"car2" : 345},
        {"car3" : 678}
    ]`;
let cars = JSON.parse(jsonIn);
console.log(cars);

//Arrays

let newCars = [
    
    {car : 123, style: "suzuki"},
    {car : 345, style: "honda"},
    {car : 678, style: "toyota"}
]

//ArraysIteration
newCars.forEach(element => {
    return console.log(element)
});
newCars.forEach((element, index) => {
    return console.log(element, index)
});

//ArraysFiltering
let brand = newCars.filter(
    car => car.style === "honda"
);
console.log(brand);

//ArrayTesting 
let result = newCars.every(
    everyCar => everyCar.car > 1
);
console.log(result);

//Locate The First Match
let locateCar = newCars.find(
    car => car.car > 500
)
console.log(locateCar);
