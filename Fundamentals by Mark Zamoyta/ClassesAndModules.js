//ClassesAndModules

//Class
class car {
}
let Car = new car();
console.log(Car);

//Constructor and properties 
class car1 {
    constructor(id) {
        this.id = id;
    }
}
let Car1 = new car1(123);
console.log(Car1.id);

//Methods 
class car2 {
    constructor(id) {
        this.id = id;
    }
    identify(prefix) {
        return `${prefix} Car Id: ${this.id}`
    }
}
let Car2 = new car2(123);
console.log(Car2.identify(1));

//Inheritance
class vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car4 extends vehicle {
    // constructor() {
    //     super();
    // }
    start() {
        return 'in car start ' + super.start();
    }
}
let car4 = new Car4();
console.log(car4.start());

