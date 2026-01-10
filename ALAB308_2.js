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

/*  Task 2: Implement control flow to make decisions on whether the plants should be:
    (a) Pruned, to stop them from exceeding the capacity of the garden: 
    This condition should be met if the plant count after the given number of weeks 
    is greater than 80% of the maximum capacity of the garden.
    (b) Monitored, if they are growing at an acceptable rate: 
    This condition should be met if the plant count is between 50% and 80% 
    of the maximum capacity of the garden after the given number of weeks.
    (c) Planted, if there is room to plant more plants: 
    This condition should be met if the plant count after the given number of weeks 
    is less than 50% of the maximum capacity of the garden.
*/
const maxPlants = area / spacePerPlant;
console.log(`The maximum capacity of the garden is ${maxPlants} plants.`);

const plantCount = initialPlants * (growthRate ** weeksToPredict);
switch (weeksToPredict) {
    case 1:
        if (plantCount > 0.8 * maxPlants) {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Prune the plants.`);
        } else if (plantCount > 0.5 * maxPlants && plantCount <= 0.8 * maxPlants) {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Monitor the plants.`);
        } else {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Plant more plants.`);
        }
        break;
    case 2:
        if (plantCount > 0.8 * maxPlants) {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Prune the plants.`);
        } else if (plantCount > 0.5 * maxPlants && plantCount <= 0.8 * maxPlants) {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Monitor the plants.`);
        } else {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Plant more plants.`);
        }
        break;
    case 3:
        if (plantCount > 0.8 * maxPlants) {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Prune the plants.`);
        } else if (plantCount > 0.5 * maxPlants && plantCount <= 0.8 * maxPlants) {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Monitor the plants.`);
        } else {
            console.log(`After ${weeksToPredict} week(s), the plant count is ${plantCount}. Action: Plant more plants.`);
        }
        break;
};

//  Part 2

/*  The conservation area in which the garden is located has multiple other gardens. 
    Using the already created logic, determine:
    The amount of additional space that would be required if the scientists were to start with 100 plants, 
    and did not prune them for 10 weeks. 
    Also, if the space remained circular, what would be the radius of this expanded garden?
*/