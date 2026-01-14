//Lab ALAB 308.3.1

/*  The task is to create a program that advises a group of environmental scientists on how to 
    handle the growth and spread of a unique plant species under their supervision. 
    To develop a growth control system that will monitor and predict the plant growth, 
    making decisions based on the available space and potential growth.
*/

//  Part 1

//  The classic “Fizz Buzz” problem.
/*  Loop through all numbers from 1 to 100.
    If a number is divisible by 3, log “Fizz.”
    If a number is divisible by 5, log “Buzz.”
    If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    If a number is not divisible by either 3 or 5, log the number.
*/
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//  Part 2

//  Finding Prime Numbers
/*  Declare an arbitrary number, n.
    Create a loop that searches for the next prime number, starting at n and incrementing from there.
    As soon as you find the prime number, log that number and exit the loop.
*/
const n = 29; // arbitrary number
let foundPrime = false;
let currentNumber = n;
while (!foundPrime) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
        if (currentNumber % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && currentNumber > 1) {
        console.log(`The next prime number after ${n} is ${currentNumber}`);
        foundPrime = true;
    } else {
        currentNumber++;
    }
}

//  Rewritting the code above, if n is equal to 4, the loop should log 5. 
//  Similarly, if n is 5, it should log 7, and if n is 9, it should log 11.
//  That is, the loop should always find the next prime number greater than n.
const m = 4; // arbitrary number
let foundNextPrime = false;
let nextNumber = m + 1;
while (!foundNextPrime) {
    let isNextPrime = true;
    for (let i = 2; i <= Math.sqrt(nextNumber); i++) {
        if (nextNumber % i == 0) {
            isNextPrime = false;
            break;
        }
    }
    if (isNextPrime && nextNumber > 1) {
        console.log(`The next prime number after ${m} is ${nextNumber}`);
        foundNextPrime = true;
    } else {
        nextNumber++;
    }
}