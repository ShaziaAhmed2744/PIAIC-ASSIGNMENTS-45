//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

const users = ["Huzaifa", "Admin", "Peter", "Kishore", "Madhubala"];

//For Each Method
users.forEach(function (user_name) {
  if (user_name == "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user_name} thank you for logging in again.`);
  }
});

//TEST
if (users.length <= 0) {
  console.log("We need to find some users!");
}
