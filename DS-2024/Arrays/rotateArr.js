// Rotating an Array:

// Implement a function to rotate the elements of an array to the left or right by a given number of positions.
//output [ 4, 5, 6, 3, 1 ]
const arr = [1, 3, 6, 5, 4];
const rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
console.log(rotatedArr)


const  a = "text1";
var b = a;
b = "text2"
console.log(a);
console.log(b);
