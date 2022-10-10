//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//print a message indicating the number of people you are inviting to dinner.

var list = ['"ali raza AZIZ"', '"SYED KOKAB HASSAN"', '"HAZRAT ALI R.A"'];
for (var i = 0; i < list.length; i++) {
  var message = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(message);
}
console.log(`I am inviting ${list.length} people to the dinner.`);
//console.log(list[5]);
