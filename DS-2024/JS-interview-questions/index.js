//What is map() - used a create a new array from existing array

// const nums = [1,2,3,4,5];
// const mul = nums.map(e => e * 3);
// console.log(mul);

// const sum = nums.reduce((acc, curr) => {
//     return acc + curr
// },0);

// console.log(sum)



//
// var x = 21;
// console.log(x); //21
// var fun = function() {
//     console.log(x); //undefined
//     var x = 20;
//     console.log(x); //20
// }
// console.log(x) //21
// fun();

// ------------------------------------------------------

// var x = 1;

// a();
// b();
// console.log(x); //1

// function a() {
//     var x = 10;
//     console.log(x); //10
// }

// function b() {
//     var x = 100;
//     console.log(x); //100
// }

// 10 100 1

//----------------------------------------------------

// function fun() {
//     a = 10;
//     let b = 50;
// }
// fun();
// console.log(a); // 10
// console.log(b); // b is not defined because its outside scope

//-------------------------------------------------------------------------

// console.log(a);  // function  a
// var a = 5;
// console.log(a); // 5

// a = () => {};

// console.log(a); //function a

// function a() {};
// console.log(a) // function a

//___________----------------------------------------------------

// console.log('a');
// for (let i=0; i<=3; i++) {
// setTimeout(() => console.log(i), 0)
// }
// console.log('b');

// a
// b
// 0
// 1
// 2
// 3

//----------------------------------------------------------
// Destructure
// const person = {name: 'Ash' ,age: 25, address: {city: 'xyz'}}
// const {name, age, address: {city}} = person;
// console.log(name, age, city) //Ash 25 xyz

// const nums = [1,2,3,4,5];
// const mul = nums.map(e => e % 2 ===0 );
// console.log(mul);


// var n = 2;

// function square(num) {
//     var ans = num * 2;
//     return ans;
// }

// console.log(square(2));
// console.log(n)

// console.log(a);  // function  a
// var a = 5;
// console.log(a); // 5

// a = () => {};

// console.log(a); //function a

// function a() {};
// console.log(a) // function a
//----------------------------------------------------------

// console.log(a); //undefined
// console.log(b) // b is not defined errror
// var a = b = 5  
//Therefore, after this line executes, a will have the value 5, and b will also have the value 5. 
// However, a is logged before it's initialized, so it will output undefined. And b is not yet declared or initialized, 
// so it will throw an error.

//-------------------------------------------------------------
// var b;
// var a = b = 5;

// console.log(a);  // Outputs: 5
// console.log(b);  // Outputs: 5

//--------------------------------------

// var x = 5;
// console.log(x++);  //5
// console.log(x) //6

// console.log(1<2<3); //true
// console.log(3>2>1)  // false

//---------------------------------

// var name = 'Ashish'
// const foo = function() {
//     console.log(this.name);
// }

// foo.call({name: 'John'}) //John

// const foo2 = () => {
//     console.log(this.name);
// }

// foo.call({name: 'John'}) //undefined

//----------------------------------------------------
// var x = 21;
// console.log(x); //21
// var fun = function() {
//     console.log(x); //undefined
//     var x = 20;
//     console.log(x); //20
// }
// fun()
// console.log(x) //21

//--------------------------
// var a = 10;
// a = 20
// console.log(a) // 20

// let b = 10;
// b = 60;
// console.log(b) //60

// var c = 10;
// var c = 30
// console.log(c) //30

// let a = 10;
// var x =() => {
//     console.log(a); //10 due to lexical scope
// }

// x();

// --------------------------------
//closures

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }

//     return y;
// }
// var z = x();
// console.log(z); //function y 
// z(); //7 having access to its lexical scope

// function z() {
//     var b = 700
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b); // 7, 700
//         }
//         y();
//     }
//     x();
// }
// z()

// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i) 
//     },1000)
//     console.log("Ashis")
// }
// x();

//First prints ashihs and after 1 sec prints 1;

//--------------------------------------------

// function x() {
//     for(var i = 1; i<= 5; i++) {
//         setTimeout(function(){
//             console.log(i)
//         },1000)
//     }
// }
// x(); // prints 6 five times(6 6 6 6 6)

// function x() {
//     for(let i = 1; i<= 5; i++) {
//         setTimeout(function(){
//             console.log(i)
//         },1000)
//     }
// }
// x(); // prints 1 2 3 4 5

// function x() {
//     for(var i = 1; i<= 5; i++) {
//         function close (x) {
//             setTimeout(function() {
//                 console.log(x)
//             },1000)
//         }
//         close(i)

//     }
// }
// x(); // 1 2 3 4 5

//----------------closures examples------------------------------------------------
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved p1");
//     }, 5000);

// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved p2");
//     }, 2000);

// })

// async function handle() {
//     console.log("hello world");
//     const val1 = await p1;
//     console.log("Namaste JS 1"); //here it waits for 5 sec and then everything is printed

//     const val2 = await p2;
//     console.log("Namaste JS 2");

// }
// handle()// /hello world Namaste js1 Namaste js2

//----------------------------------------------------------
//--------------closures---------------------------

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a); //inner forms a closure with outer
//     }
//     inner();
// }
// outer();

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// outer()(); //this is equal to var close = outer(); close();

// function outest() {
//     var c = 20
//     function outer(b) {

//         function inner() {
//             console.log(a, b, c); //10 hello Ashish 20
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer
// }
// var close = outest()('hello Ashish');
// close(); 

//----------objects--------------------------------------

// const a = {};
// const b = {key: 'b'};
// const c = {key: 'c'};

// a[b] = 123; //{ '[object Object]': 123 }
// a[c] = 456; //{ '[object Object]': 456 }

// console.log(a) //{ '[object Object]': 456 }
// console.log(a[b]); //{ '[object Object]': 456 }


//--------------
//  let c = { greeting: 'Hey'};
//  let d;

//  d = c; //here we provide to this c variable.Anything changed in c is affets both the objects

//  c.greeting = "hello";
//  console.log(d.greeting); // hello
//  console.log(c) //{ greeting: 'hello' }

 //-----------------

//  console.log({a:1} ==  {a: 1}) //false both are pointing to different reference.
//  console.log({a:1} ===  {a: 1}) //false