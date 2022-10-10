//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

const Life_stages = function (age) {
  if (age < 2) {
    console.log("Baby");
  } else if ((age >= 2, age < 4)) {
    console.log("Toddler");
  } else if ((age >= 4, age < 13)) {
    console.log("Kid");
  } else if ((age >= 13, age < 20)) {
    console.log("Teenage");
  } else if ((age >= 20, age < 65)) {
    console.log("Adult");
  } else {
    console.log("Elder");
  }
};

Life_stages(19);
