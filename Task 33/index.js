//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

const ordinal_no = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinal_no.forEach(function (Check_ordinal) {
  if (Check_ordinal == 1) {
    console.log(`${Check_ordinal}st`);
  } else if (Check_ordinal == 2) {
    console.log(`${Check_ordinal}nd`);
  } else if (Check_ordinal == 3) {
    console.log(`${Check_ordinal}nd`);
  } else {
    console.log(`${Check_ordinal}th`);
  }
});
