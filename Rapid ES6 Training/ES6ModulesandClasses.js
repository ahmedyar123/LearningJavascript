//Extends And Super
class Project {
  constructor() {
    console.log("Constructing Project");
  }
}
class softwareProject extends Project {
  constructor() {
    super();
    console.log("constructing Software Project");
  }
}
let p = new softwareProject();

let project1 = {
  getTaskCount() {
    return 50;
  }
};
let softwareProject1 = {
  getTaskCount() {
    return super.getTaskCount() + 7;
  }
};
Object.setPrototypeOf(softwareProject1, project1);
console.log(softwareProject1.getTaskCount()); //57

class project2 {
  getTaskCount() {
    return 50;
  }
}
class softwareProject2 extends project2 {
  getTaskCount() {
    return super.getTaskCount() + 7;
  }
}
console.log(softwareProject1.getTaskCount()); //57

//Poperties for class instances
class Project3 {
  constructor() {
    this.location = "karachi";
  }
}
class softwareProject3 extends Project3 {
  constructor() {
    super();
    this.location = this.location + " miami";
  }
}
let p1 = new softwareProject3();
console.log(p1.location); //Karachi miami

//Static Members
class project4 {
  static defaultId() {
    return 0;
  }
}
console.log(project4.defaultId()); //0

class project5 {
  static defaultId() {
    return 0;
  }
}
let p2 = new project5();
// console.log(p2.defaultId()); //Uncaught TypeError: p2.defaultId is not a function

//new.target
class Project6 {
  constructor() {
    console.log(new.target);
  }
}
class softwareProject6 extends Project6 {
  constructor() {
    super();
  }
}
let p3 = new softwareProject6(); //

