// Finding the Intersection of Two Arrays:

// Create a function that returns the common elements between two arrays.

const findIntersect = ((arr1,arr2) => {
   return arr1.filter(e => arr2.includes(e))
})

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersection = findIntersect(arr1, arr2);
console.log(intersection);