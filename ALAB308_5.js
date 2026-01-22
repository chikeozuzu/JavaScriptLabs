//Lab ALAB 308.5.1

// Creating Reusable Functions

//  Part 1

/*  Task:
    Take an array of numbers and return the sum.
    Take an array of numbers and return the average.
    Take an array of strings and return the longest string.
    Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
        For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
    Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/

const numbers = [10, 20, 30, 40, 50];
const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Sum of numbers
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Average of numbers
function averageArray(arr) {
    let sum = sumArray(arr);
    return sum / arr.length;
}

// Longest string in an array
function longestString(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// Strings longer than a given number
function stringsLongerThan(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Print numbers from 1 to n using recursion
function printNumbers(n) {
    if (n === 0) return;
    printNumbers(n - 1);
    console.log(n);
}   
console.log("Sum:", sumArray(numbers));
console.log("Average:", averageArray(numbers));
console.log("Longest String:", longestString(strings));
console.log("Strings longer than 4:", stringsLongerThan(strings, 4));
console.log("Print numbers from 1 to 5:");
printNumbers(5);

//  Part 2

/*  Task:
    Use callback functions alongside Array methods to accomplish the following:
    Sort the array by age.
    Filter the array to remove entries with an age greater than 50.
    Map the array to change the “occupation” key to “job” and increment every age by 1.
    Use the reduce method to calculate the sum of the ages.
    Then use the result to calculate the average age.
*/
let dataArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Sort by age
dataArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
// Filter out entries with age greater than 50
dataArray = dataArray.filter(entry => parseInt(entry.age) <= 50);
// Map to change "occupation" to "job" and increment age by 1
dataArray = dataArray.map(entry => ({
    ...entry,
    job: entry.occupation,
    age: parseInt(entry.age) + 1
}));
delete entry.occupation;
// Reduce to calculate the sum of ages
const totalAge = dataArray.reduce((sum, entry) => sum + parseInt(entry.age), 0);
// Calculate average age
const averageAge = totalAge / dataArray.length;
console.log("Sorted, Filtered, Mapped Data:", dataArray);
console.log("Total Age:", totalAge);
console.log("Average Age:", averageAge);

