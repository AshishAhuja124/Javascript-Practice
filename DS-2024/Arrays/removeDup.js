// Finding Duplicates:

// Write a function to find and remove duplicates from an array.

function removeDup(arr) {
    return [...new Set(arr)]
}

console.log(removeDup([1,2,3,4,4,5,6,7,8,8,9]));


//now count the unique elements also

function countUnique(arr) {
    const unique = new Set(arr);

    return {
        unique : [...unique],
        count: unique.size
    }
}

const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 4];
const { unique, count } = countUnique(arrayWithDuplicates);

console.log(unique);

console.log(count);
