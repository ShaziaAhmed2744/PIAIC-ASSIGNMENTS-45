//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const make_shirt = function (size, message) {
  console.log(
    `Your shirt size is ${size} and the message that print on shirt is ${message}`
  );
};
make_shirt("Large", '"I LOVE JAVSCRIPT"');
make_shirt("Medium", '"I LOVE JAVSCRIPT"');
make_shirt(32, '"GOOD BYE"');
