//
//Hoisting 

// var x = 7;
// function getName() {
//     console.log("namaste js")
// }

// getName();
// console.log(x);
// console.log(getName);


//Functions working in js
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


//window object

// var a = 10;
// function b() {
//     var x = 10;
// }

// console.log(window.a);  //10
// console.log(a)          //10
// console.log(this.a)     //10

//Let and const
// let a = 10;
// console.log(a)

// var b = 100;
// console.log(b)

// function x() {
//     let a = 1000;
//     console.log(a);
// }
// x();


//Block scope
// var a = 10;

// {
//     var a = 20;
//     console.log(a);

// }
// console.log(a);

// let a = 10;
// function c () {
//     var a = 20;
//     console.log(a);
// }
// c();
// console.log(a);

//closures

// function x() {
//     var a = 7;
//     function y () {
//         console.log(a)
//     }
//     y();
// }
// x();  


//2


// function x() {
//     var a = 7;
//     function y () {
//         console.log(a)
//     }
// return y;
// }
// var z = x();  //having access to its lexical scope
// console.log(z);
// z();


// function x() {
//     for( let i=1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log('Ashish')
// }
// x();

// function x() {
//     for( var i=1; i<=5; i++) {
//         function close(x) {
//             setTimeout(function() {
//                 console.log(x);
//             }, i * 1000);
//         }
//         close(i);
//     }
//     console.log('Ashish')
// }
// x();

// function outer () {
//     var a = 7;
//     function inner () {
//         console.log(a);
//     }
//    return inner;
// }
// var close = outer(); // outer()();
// close();

//Call bind and apply methods

// let name1 = {
//     firstName: 'Ashish',
//     lastName: 'Ahuja'
// }

// let printFullName = function(hometown,state) {
//     console.log(this.firstName + ' ' + this.lastName  + 'from' + hometown + " , " + state);
// }

// printFullName.call(name1,'Hyd', 'TS');

// let name2 = {
//     firstName: 'Sachin',
//     lastName: 'tendulkar'
// }

// printFullName.call(name2, "mum", 'Mh');   //call method
// printFullName.apply(name2, ["mum", 'Mh']); //apply method

// //Bind method

// let printMyName = printFullName.bind(name2, "mum", 'Mh');
// console.log(printMyName);
// printMyName();

//Function statement or Function declaration

// function a() {
//     console.log('Function statement');
// }

// //Function Expression

// var b = function(parameters) {
//     console.log('Function expression')
// }
// a(arguments);
// b(12);

//Difference between func declartion and expression is hoisting 
//because in case 2 it treats b as a normal variable. It throws a error.

//Anonymous functions: Function without a name but can used as a value

// var b = function() {
//     console.log('Function expression')
// }

// //Named function expression: Providing name to a function and that name can be used inside the scope
// var b = function xyx() {
//     console.log('Function expression')
//     console.log(xyz)
// }
// b();


//First class functions: passing functions inside other function or return a function from a function or assign function as a value to a variable
//The ability to use finctins as values are first class functions .
//Functins are first class citizens(first class functions)


//Callback functions

// setTimeout(function() {
//     console.log('timer');
// },5000);

// function x(y) {
//     console.log('x');
//     y();
// }

// x(function y() {
//     console.log('y');
// });

console.log('star');
setTimeout(function(cb) {
    console.log('cb')
},5000);

console.log('end');

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log('while expires and blocking the code');