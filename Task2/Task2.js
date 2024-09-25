// task 1
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements
function sumAllNum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumAllNum(10, 20));
console.log(sumAllNum(10, 20, 30, 10));
console.log("------------------------------------------------");
// task 2
// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print "All Positive" if true, otherwise print "Not All Positive".
function checkIfPostive() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = true;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            result = false;
            break;
        }
    }
    if (result) {
        console.log("All numbers are positive");
    }
    else {
        console.log("Not all numbers are positive");
    }
}
checkIfPostive(10, 20, 30);
checkIfPostive(-10, 0, -20, 30);
console.log("------------------------------------------------");
// task 3
// Find the Longest Name in an Array
// You are given an array of names. Iterate through the array and print the longest name .
var findLongestName = function () {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    var LongestNum = 0;
    var LongestName = "";
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > LongestNum) {
            LongestNum = name[i].length;
            LongestName = name[i];
        }
    }
    console.log(LongestName);
};
findLongestName("sara", "ali", "ghayda", "Shaimaa");
console.log("------------------------------------------------");
// task 4
// Count Occurrences of a Character in a String
// You are given a string and a character. Print the number of times the character appears in the string .
function Occurrence(word, char) {
    var numOccurence = 0;
    word.split('');
    for (var i = 0; i < word.length; i++) {
        if (word[i] == char) {
            numOccurence += 1;
        }
    }
    console.log(numOccurence);
}
Occurrence("ghayda", "a");
Occurrence("Independence", "e");
console.log("------------------------------------------------");
// task 5
// Identify Prime Numbers in an Array
// You are given an array of numbers. Identify and print all prime numbers from the array. 
var FindPrimeNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    numbers.forEach(function (element) {
        if (element < 2) {
            return;
        }
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(element); i++) {
            if (element % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(element + ' ');
        }
    });
};
FindPrimeNumbers(12, 19, 4, 3, 25, 23);
