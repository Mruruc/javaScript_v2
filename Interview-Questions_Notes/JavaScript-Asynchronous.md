# JavaScript Asynchronous Interview Questions

## 1) Asynchronous JavaScript

- ### What is a callback function ?
  A callback is a function passed as an argument to another function, which is then executed inside the outer function. They are a fundamental part of asynchronous programming in JavaScript.

```js
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log("Data received:", data);
}

fetchData(displayData);

// fetchData simulates an asynchronous operation (like fetching data from a server)
//  using setTimeout. Once the data is "fetched", it calls the callback function displayData
//  with the fetched data as an argument.
```

---

- ### What is a Promise ?

  A promise is an object representing the eventual completion or failure of an asynchronous operation.

  A promise is in one of these states:

  1. `Pending`: Initial state, neither fulfilled nor rejected.
  2. `Fulfilled`: Operation completed successfully.
  3. `Rejected`: Operation failed.

```js
// Creating a Promise
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., network request, file read, etc.)
  let success = true; // Simulating success or failure
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

console.log(promise); // Promise { <pending> }

// Consuming a Promise
promise
  .then(function (result) {
    console.log(result); // "Operation successful"
  })
  .catch(function (error) {
    console.log(error); // "Operation failed"
  });

// Chaining Promises
promise
  .then(function (result) {
    console.log(result);
    return "Next operation"; //  // returning value from the then will implicitly wrap it in a resolved Promise = Promise.resolve(result)
  })
  .then(function (nextResult) {
    console.log(nextResult); // "Next operation"
  })
  .catch(function (error) {
    console.log(error);
  });
```

```note
every call to .then() (or .catch() / .finally()) returns a new Promise.

Each .then and .catch returns a new promise, so the whole chain produces a value → that’s why it’s an expression.

You can assign it to a variable, return it from a function, or even nest it inside another expression.
```

---

- ### What is the difference between `Promise.all` and `Promise.race`? When would you use each?

  - 1️⃣ Promise.all

    - Takes an array of promises and returns a new promise.
    - Resolves only when all promises succeed.
    - If any promise rejects, the entire Promise.all rejects immediately.

    ```js
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    Promise.all([p1, p2, p3])
      .then((results) => console.log(results)) // [1, 2, 3]
      .catch((err) => console.error(err));
    ```

    ```note
    ✅ Use case: When you need all async results before proceeding.
    ```

  - 2️⃣ Promise.race

    - Takes an array of promises and returns a new promise.
    - Resolves or rejects as soon as the first promise settles (doesn’t wait for others).

    ```js
    const p1 = new Promise((res) => setTimeout(() => res(1), 1000));
    const p2 = new Promise((res) => setTimeout(() => res(2), 500));

    Promise.race([p1, p2])
      .then((result) => console.log(result)) // 2 (p2 finishes first)
      .catch((err) => console.error(err));
    ```

    ```note
    ✅ Use case: When you want the first result that completes, e.g., timeout handling, fastest response, or fallback.
    ```

---

- ### What are `async/await` ?

  its a modern syntax to built on top of Promises to make asynchronous code easier to read and write.
  `async` functions always return a Promise.
  `await` pauses the execution of the async function until the Promise is resolved or rejected.

  - await can only be used inside async functions.
  - async functions always return a Promise.
  - await pauses the execution of the async function until the Promise is resolved or rejected.
  - It makes asynchronous code look and behave more like synchronous code.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful");
  }, 1000);
});

async function asyncFunction() {
  try {
    let result = await promise; // pause execution until promise is resolved
    console.log("Inside async function ", result); // "Operation successful"
    // return result; // returns a resolved Promise with the value "Operation successful"
  } catch (error) {
    console.log(error); // "Operation failed"
    // throw error; // returns a rejected Promise with the error
  }
}
```

```not
Note: async/await is syntactic sugar over Promises and makes asynchronous code look synchronous.
```
