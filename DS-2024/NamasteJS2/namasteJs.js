// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, (orderId) => {
//     proceedToPayment(orderId); //callback function
// });

//Promise

// const promise = createOrder(cart);
//{data: undefined initially}
//{data: orderDetails} //at later stage 

// promise.then((orderId) => {
//     proceedToPayment(orderId);
// })
//There 

// const GitHUB_API = "https://api.github.com/users/AshishAhuja124";

// const user = fetch(GitHUB_API);
// console.log(user);


// user.then((data) => console.log(data));

//Prmise chaining

// const cart = ["shoes", "pants", "kurta"];
// const promise = createOrder(cart);
 
// createOrder(cart)
//     .then((orderId) => {
//         console.log(orderId);
//         return orderId;
//     })
//     .then((orderId) => {
//         return proceedToPayment(orderId);
//     })
//     .then((paymentInfo) => {
//         console.log(paymentInfo);
//     })
//     .catch((err) => console.log(err.message))
    

// /// creating promise

// function createOrder(cart) {

//     const pr = new Promise((resolve, reject) => {
//         //create order logic
//         //validate order 
//         //order id

//         if (!validateCart(cart)) {
//             const err = new Error("cart is not valid");
//             reject(err);
//         }
//         //logic for createOrder
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(() => resolve(orderId), 2000)

//         }
//     })

//     return pr;
// }

// function validateCart(cart) {
//     return true;
// }

// function proceedToPayment(orderId)  {
//     //payment
//     return new Promise((resolve, reject) => {
//         resolve("payment successfull")
//     })
// }

// function fun() {

//     a = 10;

//     let b = 50;

// }

// fun();

// console.log(a); 

// var Employee = {

//     company: 'xyz'
  
//   }
  
//   var emp1 = Object.create(Employee);
  
//   delete emp1.company
  
//   console.log(emp1.company);
  