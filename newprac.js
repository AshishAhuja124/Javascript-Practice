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