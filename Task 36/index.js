//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = function (size, message) {
  console.log(
    `Your shirt size is ${size} and the message that print on shirt is ${message}`
  );
};
make_shirt(32, '"GOOD BYE"');
