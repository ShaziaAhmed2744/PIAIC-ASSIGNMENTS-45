
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magician_name = ["flardo", "Shakrt"];

const show_magicians = function (magician_name) {
  console.log(magician_name);
};
magician_name.forEach(function (magician_name) {
  show_magicians(magician_name);
});
