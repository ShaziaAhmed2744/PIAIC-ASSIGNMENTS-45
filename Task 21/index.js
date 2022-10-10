//They think of something you could store in a JavaScript Object.
//Write a program that creates Objects containing these items.

// program to create JavaScript object using instance of an object

const Person = function () {
  (this.name = "John"),
    (this.age = 20),
    (this.hobbies = ["reading", "games", "coding"]),
    (this.greet = function () {
      console.log("Hello everyone.");
    }),
    (this.score = {
      maths: 90,
      science: 80,
    });
};

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
