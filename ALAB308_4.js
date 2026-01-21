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
