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