class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log( `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
  // Loop through the array, is the object is not an instance of person, throw an error. After looping through the whole thing, if they are all instances of person,
  // loop through again and call the introduce method on each object

  static introducePeople(array) {
    if (!Array.isArray(array)) {
      throw new Error(`introducePeople only takes an array as an argument.`);
    }
    for (let i = 0; i < array.length; i++) {
      if(!(array[i] instanceof Person)) {
        throw new Error(`All items in array must be Person class instances.`);
      }
    }

    array.forEach((person) => person.introduce());
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
