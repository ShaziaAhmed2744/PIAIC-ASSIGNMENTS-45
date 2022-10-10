//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.

const alien_color = function (Colour) {
  if (Colour == "Green") {
    console.log("Player just earned 5 points");
  } else {
    console.log("Player just earned 10 points");
  }
};

//Test
const test = function (Colour) {
  if (Colour == "Green") {
    console.log("Test pass.Earned 5 points");
  } else {
    console.log("Test not pass. Earned 10 points");
  }
};

alien_color("Green");

//TEST PASS
test("Green");

//TEST NOT PASS
test("Red");
