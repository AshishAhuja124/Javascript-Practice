// var arr = [1,2,3,4,5,6,7,8,9,10];
// op=[1,10,2,9,3,8,4,7,5,6];
// write a js program for this

//Using for of loop
var arr = [1,2,3,4,5,6,7,8,9,10];
var op = [];
let current = 0;


for(let element of arr) {
    current % 2 == 0 ? op.push(element) : op.unshift(element);
    current++;
}

console.log(op);

//Using reduce

var arr1 = [1,2,3,4,5,6,7,8,9,10];
var op = arr.reduce((result, curr, index) => {
    if(index % 2 == 0) {
        result.push(curr);
    }
    else {
        result.unshift(curr)
    }
    return result;
},[])

console.log(op);

//Without using new array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let current1 = 0;

for (let i = 0; i < arr.length; i += 2) {
    if (current1 % 2 !== 0) {
        // If the current index is odd, swap the element with the previous one
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    current++;
}