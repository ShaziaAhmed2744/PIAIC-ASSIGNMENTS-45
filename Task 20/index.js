//Think of something you could store in a array. For example, you could make a list of mountains,
//rivers, countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.

const mountains = ["K2", "Himalaya", "NangaParbat", "Mounteverset"];
const river = ["Ravi", "Chenab", "Sutlej", "Indus"];
const countries = ["India", "Dubai", "Medinah", "Makkah", "Swizerland"];

const Create_list = function () {
  const list = [];
  list.push(mountains[1], river[3], countries[0]);
  console.log(list);
};

Create_list();
