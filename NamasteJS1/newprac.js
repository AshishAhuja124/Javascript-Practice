//Hoisting example
//We can access variables and functions even before we have initialised

// console.log(x);

// var x = 7;
// function getName(){
//     console.log('Namste JS')
// }

// getName();  //output : undefined namste js

// If we try to access a varible even before its initialised it gives the variable as undefined.Above example

//Functions working in js

// var x = 1;
// a();
// b(); 
// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);

// }
// console.log(x)   //Output 10,100,1


//Window object
//Every thing we write other than inside a function...its in global space

// var a = 10;

// console.log(window.a);  //10
// console.log(a)          //10
// console.log(this.a)     //10
// console.log(window)    //window object
// console.log(this)      //Window object


//Scope chain & Lexical env
//Scope means where we can access a variable or function in our code
// function a(){
// console.log(b);
// }
// var b =10;
// a();


//Let & const key words: Let and const are hoisted but are in temporal dead zones for the time being
// console.log(b);

// console.log(a); //here we get Uncaught ReferenceError: Cannot access 'a' before initialization

// let a = 10;
// var b = 100;
//this is because for let declarations these would be stored in separate stack whereas var would be global stack (window object)

//Block Scope

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }
// console.log(a);  //output 10

// const c = 100;
// function x(){
//     const c = 10;
//     console.log(c); //10
// }
// x();
// console.log(c); //100 It is because let and const would be different scope whereas var would be in block scope 


//Closures: function along with its lexical scope forms a closure.

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//even if we return the function it still forms a closure

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();   //output 7 it still remembers the value even if it is returned outside

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100
//     return y;
// }
// var z = x();
// console.log(z);
// z();  //Now the output is 100 because it points to the reference of a

// function z(){
//     var b = 100;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b); //7,100
//         }
//          y();
//     }
//     x();
// }
// z();

//Closures + setTimeout examples

// function x(){
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     },3000);
//     console.log("namste Ashish")
// }
// x();

//Namste Ashish ...waits for 3 sec and then prints i

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function() {
//             console.log(i);
//         },i * 1000);
//     }
    
//     console.log("namste Ashish")
// }
// x();

//output here it prints 6 for every 1 sec..because it remembers reference to i . 

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function() {
//             console.log(i);
//         },i * 1000);
//     }
    
//     console.log("namste Ashish")
// }
// x(); //now it prints 1,2,3,4,5 because of let


//Closures examples: function having access to its lexical env or function bundled with its parent scope

// function outer() {
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();  //this syntax is similar to var x = outer(); x();

//Data hiding /Encapsulation


// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;   
//         console.log(count);
//     }
// }
// counter()() // 1

// var counter1 = counter()()

//Function statement/ Declaration

// function a(){
//     console.log('function statement/ Declaration')
// }
// a();

//Function Expression: When we declare a function to a variable
//Anonymous function/function expression
//  var b = function (parameters) {
//      console.log('Function expression')
//  }
// b(arguments);

//Anonymous function are used when functions are used as values
//Named function expression: if we function expression with name

// var b = function xy(){
//     console.log('Names function expression');
// } 


//First class functions
//Functions are very beautiful in js..the ability of functions to be used as values
//can be passed as aruguments, return out of other function
//functions are first class citizens.

//Callback functions:
//function we pass into other function

// setTimeout(function(){
//     console.log('timer')
// },2000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
// console.log("y")
// })

//higher order functions

//map, filter, reduce

//map: if we want to tranform a each value of an array and generate new array out of it
 
const arr = [2,5,6,7,8];

//DOuble [4,10,12,14,16]
const output = arr.map(x => x * 2);
console.log(output)

//filter 

const filterOutput = arr.filter(x => x > 5);
console.log(filterOutput);

//reduce : to parse an array and come up with a single value

//ex sum of elements of array
const reduceOutput = arr.reduce((acc,sum)=> {
    acc = acc + sum;
    return acc;
},0)
console.log(reduceOutput)

//find max of array

const maxArrr = arr.reduce((max,curr) => {
    if(curr > max){
    max = curr;
    }
    return max;
},0)
console.log(maxArrr)


const users = [
    {firstName: 'Ashish', lastname: 'Ahuja', age: 26},
    {firstName: 'Deepika', lastname: 'Trump', age: 76},
    {firstName: 'Alia', lastname: 'musk', age: 28},
    {firstName: 'Keee', lastname: 'apspa', age: 26},

]
//print list of full names

const fullName = users.map(x => x.firstName + x.lastname);
console.log(fullName);

//find count of people with same age

const sameAge = users.reduce((acc, curr)=>{
if(acc[curr.age]){
acc[curr.age] = ++acc[curr.age];
}
else {
    acc[curr.age] = 1
}
return acc;
},{});
console.log(sameAge);

//find firstname of all people age < 30
//here we are chaining 
const outputAge = users.filter(x => x.age < 30)
.map(x => x.firstName);
console.log(outputAge);
