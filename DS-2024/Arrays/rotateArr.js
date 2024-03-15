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


//[1,2,3,4,5,6,7] k = 3
//[5,6,7,1,2,3,4]

const revNums = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;

    }
}

function rotate(nums, k){
    
    k = k % nums.length;

    nums.reverse();
    revNums(nums, 0, k-1);
    revNums(nums, k , nums.length - 1)
    return nums
}

const res = (rotate([1,2,3,4,5,6,7],3))
console.log(res)


function sortZeros(arr) {
    arr.sort((a,b) => a === 0 ? 1 : b === 0 ? -1 : 0);
    console.log(arr);
}

console.log(sortZeros([1,2,0,9,0,8,2,2]))