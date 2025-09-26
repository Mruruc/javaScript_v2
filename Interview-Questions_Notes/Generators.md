# Generators in JavaScript

Generators are special functions that can pause execution and resume later, producing multiple values over time. They are declared using `function*` and controlled using `yield`.

---

## 1️⃣ Syntax

```js
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## 2️⃣ Key Concepts

- **function\***: declares a generator function.
- **yield**: pauses the generator and returns a value.
- **next()**: resumes execution from the last `yield`.
- **Lazy evaluation**: values are generated on demand.
- **Stateful iteration**: generator remembers its execution context.

---

## 3️⃣ Real-World Use Cases

### a) Lazy Data Streams / Large Files

```js
const fs = require("fs");
function* readLines(filePath) {
  const data = fs.readFileSync(filePath, "utf-8").split("\n");
  for (const line of data) yield line;
}

for (const line of readLines("large_file.txt")) {
  console.log(line);
}
```

### b) Infinite / On-Demand IDs or Tokens

```js
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}

const genId = idGenerator();
console.log(genId.next().value); // 1
console.log(genId.next().value); // 2
```

### c) Controlled Async Workflows (pre-async/await)

```js
function* asyncTasks() {
  const user = yield fetch("/api/user");
  const posts = yield fetch(`/api/posts?userId=${user.id}`);
  return posts;
}
```

### d) Custom Iterators for Complex Structures

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  *traverse() {
    yield this.value;
    for (let child of this.children) yield* child.traverse();
  }
}

const root = new TreeNode(1);
root.children.push(new TreeNode(2), new TreeNode(3));
for (let val of root.traverse()) console.log(val); // 1,2,3
```

### e) State Machines

```js
function* trafficLight() {
  while (true) {
    yield "Green";
    yield "Yellow";
    yield "Red";
  }
}
const light = trafficLight();
console.log(light.next().value); // Green
console.log(light.next().value); // Yellow
```

### f) Event Handling / Streams

```js
function* eventListener(ws) {
  while (true) {
    const event = yield new Promise((res) => ws.on("message", res));
    console.log("Received:", event);
  }
}
```

---

## 4️⃣ Summary Table

| Feature            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `function*`        | Declares a generator function                   |
| `yield`            | Pauses execution and returns a value            |
| `next()`           | Resumes execution from last `yield`             |
| Lazy evaluation    | Computes values only when needed                |
| Infinite sequences | Generate data endlessly without memory overhead |
| Stateful iteration | Remembers context between calls                 |
