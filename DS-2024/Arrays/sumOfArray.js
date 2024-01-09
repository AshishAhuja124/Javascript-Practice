//Write a function to calculate the sum of all elements in an array.
//using reduce
const sumOfArray = (arr) => arr.reduce((acc, current) => {
    acc = acc + current;
    return acc;
},0)

console.log(sumOfArray([1,2,4,5,6,7]))

//USinf for of loop

const sumArray = (arr) => {
    let sum = 0;
    for(let element of arr) {
        sum = sum + element;
        // console.log(sum)

    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));