//More Guests: You just found a bigger dinner table, so now more
//space is available. Think of three more guests to invite to dinner.

var Guest_list = [
  '"SYED Hamad AZIZ"',
  '"ali khan"',
];

Guest_list.unshift('"Hazrat Abu Bakr Siddique R.A"'); //adding at the beginning of array
Guest_list.push('"ALI AHMED"');
console.log("I have got a bigger space and I now love to invite more");

for (var i = 0; i < Guest_list.length; i++) {
  var message = `DEAR, ${Guest_list[i]}, I would like to invite to dinner.`;
  console.log(message);
}
