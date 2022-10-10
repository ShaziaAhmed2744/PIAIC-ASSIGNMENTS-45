//Intentional Error: If you haven’t received an array index error
//in one of your programs yet, try to make one happen. Change an index in
//one of your programs to produce an index error.
//Make sure you correct the error before closing the program.

var list = ['"SYED HATIM AZIZ"', '"SYED KOKAB HASSAN"', '"HAZRAT ALI R.A"'];
for (var i = 0; i < list.length; i++) {
  var message = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(message);
}
console.log(`I am inviting ${list.length} people to the dinner.`);
//console.log(list[5]); Intentional Error:
