const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";
//assegnare un oggetto ad un altro non memorizza l'oggetto stesso ma un riferimento a quell'oggetto quindi modificando i valori dell'oggetto assegnato modificheranno anche quelli dell'oggetto principale.

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
