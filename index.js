//
//Hoisting 
//We can access variables and functions even before we have initialised

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

// console.log('star');
// setTimeout(function(cb) {
//     console.log('cb')
// },0);

// console.log('end');


//blocking the code
// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log('while expires and blocking the code');


//Call bind and apply methods

// let name1 = {
//     firstName: 'Ashish',
//     lastName: 'Ahuja'
// }

// let printFullName = function(hometown,state) {
//     console.log(this.firstName + ' ' + this.lastName  + 'from' + hometown + " , " + state);
// }

// //function burrowing 
// printFullName.call(name1,'Hyd', 'TS');

// let name2 = {
//     firstName: 'Sachin',
//     lastName: 'tendulkar'
// }

// printFullName.call(name2, "mumbai", 'Maharastra');   //call method
// printFullName.apply(name2, ["mumbai", 'Maharastra']); //apply method

// //Bind method: Creates a copy of function that can be called later

// let printMyName = printFullName.bind(name2, "mum", 'Mh');
// console.log(printMyName);
// printMyName();


//Debouncing concept in javascript: executes a function only after some cooling period or certain gap
//Lets say we are searching a item in search bar and type school..so a call to api is made and then we type school bags ..then a final call is made .

//In debouncing: if we take example of key strokes in search bar,only api call is made when the difference between 2 key press events is greater than a certain limit


 //Throatling makes an api call only after regular intervals

//Currying in javascript: can be achieved by bind method and also by closures.
//It simply means function burrowing as we did in bind method
//Its a technique of evaluating a function with multiple arguments


// let multiply = function (x,y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(multiply,3,5);
// multiplyByThree();

// Async and defer attributes:
//both are boolean attributes used along with script tags to load the external scripts efficiently into our web pages

//In normal html, once it sees script tag,it fetches the script and executes then and there itself and blocks the code

//In async html parsing is done,and once it sees sccript tag, it loads the script async way and once all the scirpts are loaded into browser,then it exceutes the script then and there iself blocking the html parsing at that particular momement

//In defer attribute: html is done and scripts are fetched parallel and once the html parsing is done, then the scripts are executed.

//Note:

//Async doesnt guarentee the order of execution of scripts but defer does.
