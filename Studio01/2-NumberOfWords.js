/*
    In this problem you will be given a string ("Hello, world!"). Your string is a representation of a phrase. It can contain words, and spaces. You need to return the number of words in the phrase.

    Bonus: Think about edge cases like empty string, leading & trailing spaces, all spaces, etc. 
*/

let string1 = "Hello, world!";
let string2 = "This is a sentence of undetermined length.";

// BASIC SYNTAX
function getLengthOfString(str) {
    str = str.trim(); // edge case
    if (str === "") { // edge case
        return 0;
    }
    let count = 1;
    for (let i=0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }
    return count;
}

// MORE CONCISE
// const getLengthOfString = (str) => {
//     trimmed = str.trim();
//     if (trimmed === "") return 0;
//     return trimmed.split(" ").length;
// };

// TRY IT OUT
console.log(getLengthOfString(string1));
console.log(getLengthOfString(string2));

// EDGE CASES
console.log(getLengthOfString("   This is the way.   "));
console.log(getLengthOfString("    "));
console.log(getLengthOfString(""));
