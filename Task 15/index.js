//Changing Guest List: You just heard that one of your guests can’t
//make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.

var list = ['"SYED HATIM AZIZ"', '"SYED KOKAB HASSAN"', '"HAZRAT ALI R.A"'];
console.log(list[0]);
list[0] = "Hazrat Abu Bakr Siddique R.A";
for (var i = 0; i < list.length; i++) {
  var message = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(message);
}
