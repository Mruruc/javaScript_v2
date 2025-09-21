# JavaScript Event Loop

The Event Loop is a mechanism in JavaScript that allows it to handle asynchronous operations.
It continuously checks the call stack and the callback queue.
If the call stack is empty, it moves a function from the callback queue to the call stack for execution

## 1️⃣ Why the Event Loop Exists

JavaScript is `single-threaded`, meaning it can only execute one piece of code at a time.
However, it can still handle `asynchronous operations` (like timers, network requests, file I/O) without blocking the main thread.

```note
This is possible thanks to the event loop, which coordinates between the call stack and async tasks.
```

---

## 2️⃣ Core Components

- ### Call Stack

  - The place where functions are executed.
  - Last In, First Out (LIFO stack).
  - Example:
    ```js
    function a() {
      console.log("a");
    }
    function b() {
      a();
      console.log("b");
    }
    b();
    ```
    ```Stack Execution
    [b() → a() → console.log("a")] → pop → console.log("b")
    ```

- ### b) Web APIs / Browser APIs

  - Async tasks like `setTimeout`, `fetch`, `DOM events`.
  - Browser/Node handles these outside the main thread.
  - Example:
    ```js
    setTimeout(() => console.log("Hello"), 1000);
    ```
  - JS hands this to the browser, which triggers it after 1 seconds

- ### c) Task Queue

  After async tasks are ready, they go into a `queue/s` waiting for the stack to be free.

  ```
  There are two main types of queues:
  ```

  - 1. `Macrotask Queue (Task Queue)`

    - Includes:
      - `setTimeout`, `setInterval`
      - `setImmediate` (Node)
      - I/O callbacks
      - requestAnimationFrame

  - 2. `Microtask Queue`
    - Includes:
      - `Promises` (.then, .catch, .finally)
      - `process.nextTick` (Node)
      - queueMicrotask

  ```
  ``Microtasks have higher priority — they run before the next macrotask.``
  ```

## 3️⃣ Event Loop Mechanics

Steps in each tick:

1. Execute all code in the call stack (synchronous code).
2. Process all microtasks in the microtask queue.
   - Keep running microtasks until the queue is empty.
3. Process one macrotask from the task queue.
4. Repeat.

### Key Rule:

```
Microtasks always run before the next macrotask, even if the macrotask was queued first.
```

## 4️⃣ Example: Understanding the Flow

```js
//!!!!!!! In practice, order of microtasks depends on insertion order, so the one scheduled first runs first. 
console.log("Script start"); // call stack
Promise.resolve().then(() => {
  console.log("Promise resolved 1"); // microtask queue
});

queueMicrotask(() => {
  console.log("Microtask executed"); // microtask queue
});

setTimeout(() => {
  console.log("Timeout executed"); // macrotask queue
}, 0);
    
Promise.resolve().then(() => {
  console.log("Promise resolved 2"); // microtask queue
});

console.log("Script end"); // call stack
```

```txt
- JavaScript Engine (V8): Executes JavaScript code in a single thread but utilizes multiple threads internally for operations like garbage collection and compilation.

- libuv (Node.js): Manages asynchronous I/O operations using  a thread pool, allowing non-blocking behavior while JavaScript code remains single-threaded.

- Web Workers: Provide a mechanism for parallel execution of JavaScript code in background threads, facilitating concurrent operations in browser environments.
```