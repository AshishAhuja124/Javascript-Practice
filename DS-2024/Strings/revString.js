// reverse a string

function reverse(str) {
    return str.split('').reverse().join('');
}

// console.log(reverse("hello, world"))

//other method

//Using Array.from ..it array.from converts the string to array

function rev(str) {
    return Array.from(str).reverse.join('');
}

//Using for of

function revForOf(str) {
    let reversed = '';
    for(let char of str) {
        reversed = char + reversed;
        console.log(char, "char");
        console.log(reversed, "reversed");
    }
    return reversed;
}

const originalString = "Hello, World!";
const reversedString = revForOf(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);
