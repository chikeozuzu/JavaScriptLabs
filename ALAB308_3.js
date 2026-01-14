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