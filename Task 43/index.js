//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const MagicianName = ["Flardo", "Shakrt"];
const MagicianNameCopy = [];

const show_magicians = function (magician_name) {
  let greetMessage = `Hello ${magician_name}, How Are You?`;
  console.log(greetMessage);
  MagicianNameCopy.push(greetMessage);
};

const Greet = function (magician_name) {
  console.log(magician_name);
};

MagicianName.forEach(function (magician_name) {
  show_magicians(magician_name);
});

MagicianNameCopy.forEach(function (magician_name) {
  show_magicians(magician_name);
});

console.log(MagicianNameCopy);
