//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
//the if block should print a statement, such as You really like bananas!

const fruits = ["Banana", "Apple", "Peach", "Orange"];
const favourite_fruits = ["Grape", "Mango", "Peach"];

const check = function (Fruit_name) {
  fruits.forEach(function (Check_fruits) {
    if (Check_fruits == Fruit_name) {
      console.log("Found in the list");
    } else {
    }
  });
};

check("Orange");

for (i = 0; i < favourite_fruits.length; i++) {
  if (favourite_fruits[i] == fruits[0]) {
    console.log("You really like bananas!");
  }
  if (favourite_fruits[i] == fruits[1]) {
    console.log("You really like Apple!");
  }
  if (favourite_fruits[i] == fruits[2]) {
    console.log("You really like Peach!");
  }
  if (favourite_fruits[i] == fruits[3]) {
    console.log("You really like Orange!");
  }
}
