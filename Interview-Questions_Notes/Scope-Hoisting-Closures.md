# Scope, Hoisting, and Closures

## 1️⃣ Hoisting

> Hoisting is JavaScript's behavior of moving **declarations** (not
> initializations) to the top of their scope during the compilation
> phase.

-   Applies to:
    -   **Function declarations**
    -   **Variable declarations with `var`**
-   Does **NOT** apply the same way to:
    -   Variable declarations with `let` and `const` (they are hoisted
        to the *block* but kept in the **temporal dead zone** until
        their declaration is evaluated).

------------------------------------------------------------------------

## 2️⃣ `var`, `let`, and `const`

| Keyword | Scope    | Hoisting                | Re-declare | Re-assign | Notes                                             |
|---------|----------|-------------------------|------------|-----------|---------------------------------------------------|
| `var`   | Function | ✅ Hoisted, initialized with `undefined` | ✅         | ✅        | Can cause accidental overwrites                   |
| `let`   | Block    | ✅ Hoisted (but TDZ)     | ❌         | ✅        | Must be declared before use                       |
| `const` | Block    | ✅ Hoisted (but TDZ)     | ❌         | ❌        | Must be initialized at declaration                |

> **TDZ = Temporal Dead Zone** -- code between the start of the scope
> and the line of declaration where access throws `ReferenceError`.

------------------------------------------------------------------------

## 3️⃣ Interview-Style Examples

### Example 1: `var` vs `let` hoisting

``` js
console.log(a); // undefined (var is hoisted and initialized)
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 10;
```

### Example 2: Function declaration vs function expression

``` js
foo(); // ✅ works
bar(); // ❌ TypeError: bar is not a function

function foo() {
  console.log("I am a function declaration");
}

var bar = function() {
  console.log("I am a function expression");
};
```

### Example 3: `var` inside a block

``` js
if (true) {
  var x = 1;
  let y = 2;
}
console.log(x); // 1  (function/global scope)
console.log(y); // ReferenceError (block scope)
```

### Example 4: Hoisting with initialization order

``` js
console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError
let b = 2;

function test() {
  console.log(c); // undefined
  var c = 3;
}
test();
```

### Example 5: Hoisting & Closures

``` js
function outer() {
  console.log(x); // undefined
  var x = 10;
  return function inner() {
    console.log(x); // 10
  };
}
const fn = outer();
fn();
```

------------------------------------------------------------------------

## 🔍 Interview Tips


## 1️⃣ Temporal Dead Zone (TDZ)
> The period between entering a block and the line where a `let`/`const` is declared.  
> Accessing the variable in the TDZ → `ReferenceError`.  
> `var` doesn’t have a TDZ; it’s hoisted and initialized as `undefined`.

---

## 2️⃣ Function Declarations vs Expressions vs Arrow Functions
- **Function declaration** → Hoisted with full body; callable before its definition.  
- **Function expression** → Hoisted as `undefined` (like `var`); not callable before assignment.  
- **Arrow function** → Like a function expression but no own `this`, `arguments`, or `prototype`.

---

## 3️⃣ var Scope Leakage vs let/const Block Scope
- `var` → Function-scoped, leaks out of blocks (`if`, `for`).  
- `let` / `const` → Block-scoped, only accessible inside `{ }`.

---

## 4️⃣ ReferenceError vs undefined
- **ReferenceError** → Variable is in TDZ or not declared at all.  
- **undefined** → Variable is hoisted but not initialized (`var` or unassigned property).


-----

## What is a closure? 

A closure is a function that has access to its outer function's scope, even after the outer function has finished executing. Closures are created every time a function is created. They are often used for data privacy and for creating stateful functions.

### ✅ Use cases:

- Data privacy / encapsulation
- Creating stateful functions
- Partial application / currying
- Event handlers, callbacks

### 1️⃣ Encapsulation / Data Privacy (e.g., private counter)
```js
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = 0;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
```


## 2️⃣ Remembering State in Event Handlers

``` js
function attachClickTracker(buttonId) {
  let clicks = 0;
  const btn = document.getElementById(buttonId);

  btn.addEventListener("click", () => {
    clicks++;
    console.log(\`Button clicked \${clicks} times\`);
  });
}

attachClickTracker("saveBtn");
```

------------------------------------------------------------------------

## 3️⃣ Currying / Partial Application

``` js
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```

------------------------------------------------------------------------

## 4️⃣ Memoization / Caching

``` js
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (arg in cache) return cache[arg];
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const square = memoize((n) => n * n);
console.log(square(4)); // computes 16
console.log(square(4)); // returns cached 16
```

------------------------------------------------------------------------

## 5️⃣ Once Utility

``` js
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const init = once(() => console.log("Initialized!"));
init(); // "Initialized!"
init(); // (no log)
```