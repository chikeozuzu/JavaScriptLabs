//Lab ALAB 308.4.1

/*  The task is to create two different data processing algorithms. 
    The first stage will transform raw data into a formatted array of objects according to a specification. 
    The second stage will use the output from the first stage to provide a textual report on the data.
*/

//  Part 1

//  Refactoring the script from ALAB 308.3.1 that parsed CSVs. 
//  With the knowledge of arrays and objects, how would you change your approach to this problem?
//  Do not use functions for this part; just use basic constructs like loops, conditionals, arrays, and objects.

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvRows = csvData.split('\n');
const headers = csvRows[0].split(',');
const dataObjects = [];
for (let i = 1; i < csvRows.length; i++) {
    const cells = csvRows[i].split(',');
    const dataObject = {};
    for (let j = 0; j < headers.length; j++) {
        dataObject[headers[j]] = cells[j];
    }
    dataObjects.push(dataObject);
}
console.log(dataObjects);

//  Part 2

/*  Building on the code created in Part 1:
    Declare a variable that stores the number of columns in each row of data within the CSV.
    Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
    This should be calculated dynamically based on the first row of data.
    For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. 
    You can safely assume that all rows that follow will contain the same number of entries per row.
    After you have implemented the above:
    Store your results in a two-dimensional array.
    Each row should be its own array, with individual entries for each column.
    Each row should be stored in a parent array, with the heading row located at index 0.
    Cache this two-dimensional array in a variable for later use.
*/
const csvStringDynamic = "ID,Name,Occupation,Age,Country\n42,Bruce,Knight,41,USA\n57,Bob,Fry Cook,19,Canada\n63,Blaine,Quiz Master,58,UK\n98,Bill,Doctor’s Assistant,26,Australia";
const csvRowsDynamic = csvStringDynamic.split('\n');
const numberOfColumns = csvRowsDynamic[0].split(',').length;
const twoDimensionalArray = [];
for (let i = 0; i < csvRowsDynamic.length; i++) {
    const cells = csvRowsDynamic[i].split(',');
    twoDimensionalArray.push(cells);
}
console.log(`Number of columns: ${numberOfColumns}`);
console.log(twoDimensionalArray);
//  The twoDimensionalArray variable now contains the CSV data in a 2D array format.
//  Each row is an array, and all rows are contained within the parent array.
//  The numberOfColumns variable dynamically reflects the number of columns based on the header row.
//  This setup allows for flexible handling of CSV data with varying numbers of columns.

//  Part 3

/*  In order to make it more obvious what the data is, we will transform our rows into objects.
    For each row of data in the result array produced by your code above, 
    create an object where the key of each value is the heading for that value’s column.
    Convert these keys to all lowercase letters for consistency.
    Store these objects in an array, in the order that they were originally listed.
    Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
*/
const headerRow = twoDimensionalArray[0];
const objectArray = [];
for (let i = 1; i < twoDimensionalArray.length; i++) {
    const row = twoDimensionalArray[i];
    const obj = {};
    for (let j = 0; j < headerRow.length; j++) {
        obj[headerRow[j].toLowerCase()] = row[j];
    }
    objectArray.push(obj);
}
console.log(objectArray);

//  The objectArray variable now contains an array of objects.
//  Each object represents a row of data, with keys derived from the header row in lowercase format.

//  Part 4

/*  Using array methods, accomplish the following tasks, in order upon the result of Part 3:
    Remove the last element from the sorted array.
    Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
    Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }
*/
objectArray.pop();
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectArray);
//  The objectArray variable has been modified as specified.


//  Part 5

//  As a final task, transform the final set of data back into CSV format.