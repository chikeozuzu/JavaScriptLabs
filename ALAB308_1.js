//Lab ALAB 308.1.1

// Part 1
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Tasks:
// Check: All numbers are divisible by 5.
const isDivisibleBy5 = (n1 % 5) == 0 && (n2 % 5) == 0 && (n3 % 5) == 0 && (n4 % 5) == 0;
console.log(isDivisibleBy5);
console.log(`All four numbers are divisible by 5 according to the provided criteria: ${isDivisibleBy5}.`);

// Check: The first number is larger than the last.
const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast);
console.log(`The first number is larger than the last according to the provided criteria: ${isFirstLargerThanLast}.`);

// Arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const difference = n2 - n1;
const product = difference * n3;
const remainder = product % n4;
console.log(remainder);

// Change the way that isOver25 calculates so that we do not need to use 
// the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isUnder25);


// Part 2
// Scenario: You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Declaring and assigning the variables.
const totalDistance = 1500;
const fuelCostPerGallon = 3;
const speed55 = 55;
const speed60 = 60;
const speed75 = 75;
const efficiency55 = 30;
const efficiency60 = 28;
const efficiency75 = 23;

// The first step is to calculate the gallons of fuel needed for the entire trip at each speed.
const gallonsNeededAtSpeed55 = totalDistance / efficiency55;
const gallonsNeededAtSpeed60 = totalDistance / efficiency60;
const gallonsNeededAtSpeed75 = totalDistance / efficiency75;

console.log(`Gallons of fuel needed for entire trip at 55 mph: ${gallonsNeededAtSpeed55}`);
console.log(`Gallons of fuel needed for entire trip at 60 mph: ${gallonsNeededAtSpeed60}`);
console.log(`Gallons of fuel needed for entire trip at 75 mph: ${gallonsNeededAtSpeed75}`);

// The next step is to calculate the total fuel cost for the trip at each speed.
const fuelCostAtSpeed55 = gallonsNeededAtSpeed55 * fuelCostPerGallon;
const fuelCostAtSpeed60 = gallonsNeededAtSpeed60 * fuelCostPerGallon;
const fuelCostAtSpeed75 = gallonsNeededAtSpeed75 * fuelCostPerGallon;

console.log(`Fuel cost at 55 mph: $${fuelCostAtSpeed55}`);
console.log(`Fuel cost at 60 mph: $${fuelCostAtSpeed60}`);
console.log(`Fuel cost at 75 mph: $${fuelCostAtSpeed75}`);

// Then, we need to determine if the trip is within the fuel budget at each speed.
const fuelBudget = 175;
const isWithinBudgetAtSpeed55 = fuelCostAtSpeed55 <= fuelBudget;
const isWithinBudgetAtSpeed60 = fuelCostAtSpeed60 <= fuelBudget;
const isWithinBudgetAtSpeed75 = fuelCostAtSpeed75 <= fuelBudget;

console.log(`Is the trip within the budget at 55 mph? ${isWithinBudgetAtSpeed55}`);
console.log(`Is the trip within the budget at 60 mph? ${isWithinBudgetAtSpeed60}`);
console.log(`Is the trip within the budget at 75 mph? ${isWithinBudgetAtSpeed75}`);

// Finally, we calculate the total travel time for the trip at each speed in hours.
const travelTimeAtSpeed55 = totalDistance / speed55;
const travelTimeAtSpeed60 = totalDistance / speed60;
const travelTimeAtSpeed75 = totalDistance / speed75;

console.log(`Travel time at 55 mph: ${travelTimeAtSpeed55} hours`);
console.log(`Travel time at 60 mph: ${travelTimeAtSpeed60} hours`);
console.log(`Travel time at 75 mph: ${travelTimeAtSpeed75} hours`);

// Comparing the results when traveling at an average of 55, 60, and 75 miles per hour. 
// Which makes the most sense for the trip?

const isSpeed55Better = isWithinBudgetAtSpeed55 && (travelTimeAtSpeed55 < travelTimeAtSpeed60) && (travelTimeAtSpeed55 < travelTimeAtSpeed75);
const isSpeed60Better = isWithinBudgetAtSpeed60 && (travelTimeAtSpeed60 < travelTimeAtSpeed55) && (travelTimeAtSpeed60 < travelTimeAtSpeed75);
const isSpeed75Better = isWithinBudgetAtSpeed75 && (travelTimeAtSpeed75 < travelTimeAtSpeed55) && (travelTimeAtSpeed75 < travelTimeAtSpeed60);

console.log(`Is traveling at 55 mph the best option? ${isSpeed55Better}`);
console.log(`Is traveling at 60 mph the best option? ${isSpeed60Better}`);
console.log(`Is traveling at 75 mph the best option? ${isSpeed75Better}`);