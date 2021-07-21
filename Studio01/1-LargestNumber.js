/*
    Given an array of integers, find and return the index of the highest value in the array.

    Bonus: What about edge cases like negative numbers or a single number?
*/

let array1 = [23, 64, 811, 53, 299, 101, 49];
let array2 = [1, 4, 6, 2, 8, 3, 9, 5, 0, 7];

// BASIC SYNTAX
// function findHighestValue(arr) {
//     let highest = arr[0];
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] > highest) {
//             highest = arr[i];
//         }
//     }
//     let index = arr.indexOf(highest);
//     return index;
// }

// NEW SYNTAX, MORE CONCISE
// const findHighestValue = (arr) => {
//     let highest = arr[0];
//     arr.forEach(num => { if (num > highest) highest = num; });
//     return arr.indexOf(highest);
// };

// MATH.MAX WITH REST OPERATOR
function findHighestValue(arr) {
    return arr.indexOf(Math.max(...arr));
}

// TRY IT OUT
console.log(findHighestValue(array1));
console.log(findHighestValue(array2));

// EDGE CASES
console.log(findHighestValue([-3, -5, -2, -8, -4, -1, -9, -6]));
console.log(findHighestValue([1]));
