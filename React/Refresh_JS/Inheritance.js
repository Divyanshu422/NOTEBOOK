class Human {
  gender;
  constructor(gender) {
    this.gender = gender;
  }
  printGender() {
    console.log(
      `The gender of the person who subscribed to the class is ${this.gender}`
    );
  }
}

class Person extends Human {
  name;
  constructor(name, gender) {
    // ! The usage of the super is mandatory
    super(gender);
    this.name = name;
  }
  printName() {
    console.log(`The name of the individual is ${this.name}`);
  }
}

const object = new Person("Divyanshu", "male");
object.printName(); // The name of the individual is Divyanshu
object.printGender(); // The gender of the person who subscribed to the class is male
