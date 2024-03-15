// callbacks

const carts = ['shoes', "pants", "kurta"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary()
    })
})
//inversion of control occurs


//Promises
//above example using promises
const carts2 = ['shoes', "pants", "kurta"]

const promise = createOrder(cart);

promise.then((orderId) => {
    proceedToPayment(orderId)
})
    .then((orderId) => {
        showOrderSummary(paymentInfo)
    })


//create a promise

const carts3 = ['shoes', "pants", "kurta"]

//creating create order promise

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {

        if (!validatecart) {
            const err = new Error('cart is notvalid');
            reject(err);
        }
        if (orderId) {
            setTimeout(() => resolve(orderId), 300)
        }
    })
    return pr;
}

function validateCart(cart) {
    return true;
}

// Function that returns a promise to simulate an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            const success = Math.random() < 0.5; // Simulate success/failure randomly
            if (success) {
                const data = 'Some fetched data';
                // Resolve the promise with the fetched data
                resolve(data);
            } else {
                // Reject the promise with an error message
                reject('Failed to fetch data');
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the promise
fetchData()
    .then((result) => {
        console.log('Data fetched successfully:', result);
        // You can return another promise here if needed
        return result.toUpperCase();
    })
    .then((modifiedResult) => {
        console.log('Modified data:', modifiedResult);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

const API_URL = "https://api.github.com/users/AshishAhuja124"
const user = fetch(API_URL)// returns a promise

user.then((res) => console.log(res));