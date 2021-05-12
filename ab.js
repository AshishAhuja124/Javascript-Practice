// // // var score = 72;
// // // console.log(score)
// // var txt = "Hello";       // String
// // var res= txt.split("");          // Split on commas
// // console.log(res)

// let age = 30;
// if(true) {
//     let age = 40;
//     console.log('inside', age)
// }
// console.log('outside', age)

// const a = () => {
//     console.log('hello')
// }
// a();

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }
// const a = calcArea(5);
// console.log(a);

// let people = ['m','a','c', 'b', 'kl'];

// people.forEach((person, index) => console.log(index,person));

//object literals

// let user = {
//     name : 'Ash',
//     age: 24,
//     email: 'ashishahuja124@gmail.com'
// }
// console.log(user)
// let x = 10;
// { 
//     let x = 2;
//     console.log(x)
// }
// console.log(x)

// const scores = [10,20,30,40,50];
// let x = scores.filter((score)=> score>20);

// console.log(x)

const scores = [10,20,30,40,50];
let x = scores.reduce(score => score > 30);
console.log(x)