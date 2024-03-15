// const pr = new Promise((resolve, reject) => {
//     resolve("promise resolved !!")
// })

// async function getData() {
//     return pr;
// }

// const data = getData();
// data.then(res => console.log(res))

//Using async and await is used to handle promises

//Traditional promises way

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 5000);

})

function getData() {
    // Js engine wont wait for promise to be resolved
    p.then((res) => console.log(res));
    console.log("Namaste js using traditional promise")
}
getData();

//Using async and await
//await can only be used inside an async function

async function handlePromise() {
    console.log("hello world");
    //Js engine was waiting for promise to resolve
   const val =  await p;
   console.log("Namaste JS");
   console.log(val);
}

// handlePromise();



//More examples
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved p1");
    }, 5000);

})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved p2");
    }, 2000);

})

async function handle() {
    console.log("hello world");
    const val1 = await p1;
    //js engine waits for promise to resolve
    console.log("Namaste JS 1"); //here it waits for 5 sec and then everything is printed

    const val2 = await p2;
    console.log("Namaste JS 2");

}
// handle(); //hello world Namaste js1 Namaste js2


//Real world examples
const API_URL = "https://api.github.com/users/AshishAhuja124"

// const API_URL = "https://api.github.com/users/AshishAhuja124"

// async function handleFetch() {
//   const data = await fetch(API_URL);

//   const json = await data.json();
//   console.log(json)
// }
// handleFetch();
const handleFetch = async() => {
    try {
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json)
    }
    catch (err) {
        console.error(err);
    }
  
}
handleFetch();