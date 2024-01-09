//Finding the Largest Element in an Array:
var largestNum = ((arr) => {
    arr.sort((a,b) => b - a);
    return arr[0];
})

console.log(largestNum([3,5,6,7,8,9,0]))

//other sollution

function largestNo(arr) {
    let largest = 0;
    for (let i of arr) {
        if (i > largest) {
            largest = i
        }
    }
    return largest;
}

console.log(largestNo([3,5,6,7,8,9,0,12]))