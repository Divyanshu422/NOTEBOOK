// class are the bluePrint for the object
class Person {
  //  Property
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //  Method
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const Object1 = new Person("Divyanshu", 29);
Object1.sayHello(); // Hello, my name is Divyanshus
