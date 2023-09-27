/**
 * HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
Examples

 round to  (85 - 84 is less than 3)
 do not round (result is less than 40)
 do not round (60 - 57 is 3 or higher)
Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding
Returns

int[n]: the grades after rounding as appropriate
Input Format

The first line contains a single integer, , the number of students.
Each line  of the  subsequent lines contains a single integer, .

Constraints

<=1 n<=60
0 <= grades[i] <=100
 * 
 * 
*/

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 * 
 * solution:
 * students min 1 max 60
 * grades min 0 max 100
 * 
 * received input and round value
 * 
 * conditions:
 * if number grade minus next 5 division number less than 3 get the 5 division: grade 73 next 75 = 75-73 = 2 get 75; maintain value: grade 67 next 70 = 70 - 67 = 3
 * 
 * 
 */

function roundToFiveDivNumb(n) {
    return Math.ceil(n/5)*5;
}



function gradingStudents(grades) {
    let fiveDiv;
    let resultFat;
    let grade;
    const roundGrades = new Array();
    
    for(let i = 0; i <= grades.length; i++) {
        let grade = grades[i];
        fiveDiv = roundToFiveDivNumb(grade);
        resultFat = fiveDiv - grade;
        if(resultFat < 3 && grade >= 38) {
            roundGrades.push(fiveDiv);
        }
        
        if(grade < 38 || resultFat >= 3) {
            roundGrades.push(grade);
        }
        
    }
    
    return roundGrades;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}