console.log("hello World")

//Your Own Array: Think of your favorite mode of transportation, such as
//a motorcycle or a car, and make a list that stores several examples. Use your
//list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”

var fav_transport = ["Honda", "Mercedes", "BMW", "Porshee"];
var store = [];
for (var i = 0; i < fav_transport.length; i++) {
  var message = `I would like to own a ${fav_transport[i]} car.`; //Using templeate String
  console.log(message);
  store.push(message);
}
console.log(store);
