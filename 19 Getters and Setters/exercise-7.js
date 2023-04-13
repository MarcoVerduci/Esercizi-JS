class Person {
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  set firstName(value) {
    this.#firstName = value;
  }

  get firstName() {
    return this.#firstName;
  }

  set lastName(value) {
    this.#lastName = value;
  }

  get lastName() {
    return this.#lastName;
  }

  set age(value) {
    this.#age = value;
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);