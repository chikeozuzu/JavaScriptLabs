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