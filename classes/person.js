class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    return `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.".`;
  }
  // Loop through the array, is the object is not an instance of person, throw an error. After looping through the whole thing, if they are all instances of person,
  // loop through again and call the introduce method on each object

  static introducePeople(array) {
    for (let i = 0; i < array.length; i++) {
      let ppl = array[i];
      if(ppl instanceof Person){
        return introduce(ppl)
        
      }
      if (!Array.isArray(array)) {
        throw new Error(`introducePeople only takes an array as an argument.`);

    }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
