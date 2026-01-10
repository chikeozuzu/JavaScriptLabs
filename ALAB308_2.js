//Lab ALAB 308.2.1

/*  The task is to create a program that advises a group of environmental scientists on how to 
    handle the growth and spread of a unique plant species under their supervision. 
    To develop a growth control system that will monitor and predict the plant growth, 
    making decisions based on the available space and potential growth.
*/

//  Part 1

//  Program data:
//  The area in which the plants are contained is circular, with a radius of 5 meters.
const radius = 5; // in meters
//  Each plant requires a minimum space of 0.8 square meters.
const spacePerPlant = 0.8; // in square meters
//  The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius; // in square meters

//  The area is starting with 20 plants.
const initialPlants = 20;
//  The plants double in number every week.
const growthRate = 2; 

//  Task 1: Predict the plant growth after a specific number of weeks (1, 2, and 3 weeks).
const weeksToPredict = [1, 2, 3];
switch (weeksToPredict) {
    case 1:
        const plantsAfter1Week = initialPlants * (growthRate ** 1);
        console.log(`After 1 week, there will be ${plantsAfter1Week} plants.`);
        break;
    case 2:
        const plantsAfter2Weeks = initialPlants * (growthRate ** 2);
        console.log(`After 2 weeks, there will be ${plantsAfter2Weeks} plants.`);
        break;
    case 3:
        const plantsAfter3Weeks = initialPlants * (growthRate ** 3);
        console.log(`After 3 weeks, there will be ${plantsAfter3Weeks} plants.`);
        break;
}

