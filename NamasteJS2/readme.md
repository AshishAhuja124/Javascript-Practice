### What is a promise
The Promise object represents the eventual completion (or failure) of an async operation and its resulting value.
A Promise is in one of these states:

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.


The Promise class offers four static methods to facilitate async task concurrency:

### Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

### Promise.allSettled()
Fulfills when all promises settle.Even if one api fails it waits for other api to execute and gives the collective result

### Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

--If all promised are rejected, it gives special error called as Aggregate error

### Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.


### async and await
await can only be used inside an async function
