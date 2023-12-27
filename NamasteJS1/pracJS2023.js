//Hoisting example
//We can access variables and functions even before we have initialised

// console.log(x)
// getName();

// var x = 7;

// function getName() {
//     console.log("namsate javascript") //output : undefined namste js
// }

//Functions 

// var x = 1;
// a();
// b();
// console.log(x)
// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }
// console.log(x)  //output 10,100,1, 1

//scope chain

// function a() {
//     console.log(b);
// }
// var b = 10;
// a();


// let a = 10;
// console.log(a)
// var b = 100;

// console.log(a);

//block scope

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

//Closures

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
        close(i)
    }

    console.log("namste Ashish")
}
x();
