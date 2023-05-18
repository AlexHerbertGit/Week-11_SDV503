//Make a function that sorts an array and deletes and duplicates.
let arr = [1, 2, 3, 3, 4, 5];

function deleteDuplicates(arr) {
    const newArray = [];
    
    let currentArray = arr[0]
    newArray.push(currentArray)
//for loop for iterating through the given array. 
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== currentArray) { //This is checking for duplicate values.
            currentArray = arr[i]
            newArray.push(currentArray) // pushes the value to the newArray variable.
        }
    }
    return newArray; 
}
console.log(deleteDuplicates(arr));

//Function that counts the amount of zeros in an array, returns the count of the values.
let twoArrays = [[0, 0], [0, 1]];

function countZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++)
        if (arr[i][j] === 0) {
            count++
        }
    }
    return count;
}
console.log(countZeros(twoArrays));

// Write a function that returns the largest even number in an array.

let numArray = [1, 10, 17];
let numArray2 = [1, 3, 5, 7, 9]

function evenLargestNumber(arr) {
    let largestNum = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && (largestNum < arr[i]))
        largestNum = arr[i];
     }
        return largestNum;
}
   


console.log(evenLargestNumber(numArray));
console.log(evenLargestNumber(numArray2));

//Create a function that transofrms an array into mirror array.
// mirrorArray([1, 2, 3, 4])

function mirrorArray(arr) {
    for (let i = arr.length - 2; i >= 0; i--){
        arr.push(arr[i]);
    }
    return arr;
};

console.log(mirrorArray([1, 2, 3, 4]));