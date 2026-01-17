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

