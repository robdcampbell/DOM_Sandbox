console.log("Pterodactyl");

//Create a function that counts the integer's number of digits.

// count(318) ➞ 3
// count(-92563) ➞ 5
// count(4666) ➞ 4
// count(-314890) ➞ 6
// count(654321) ➞ 6
// count(638476) ➞ 6
const count = (num) => {
  return `${Math.abs(num)}`.length;
};

console.log(count(3423423));

/*
  futurePeople(256, 2) ➞ 976

  futurePeople(3248, 6) ➞ 5408

  futurePeople(5240, 3) ➞ 6320
*/

// Find the landmass percentage of each country in comparison to the rest of the world.

function areaOfCountry(name, area) {
  return `${name} is ${((area / 148940000) * 100).toFixed(
    2
  )}% of the total world's landmass`;
}

// examples:
/* 
  Test Passed: Value == "USA is 6.29% of the total world's landmass"
  Test Passed: Value == "Russia is 11.48% of the total world's landmass"
  Test Passed: Value == "Iran is 1.11% of the total world's landmass"
  Test Passed: Value == "India is 2.21% of the total world's landmass"
  */
