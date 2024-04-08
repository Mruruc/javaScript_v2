
class User{}

const user=new User();
console.log(user instanceof Object);
console.log(user instanceof User);


class Test extends User{}

let test21=new Test();
console.log(test21);
console.log(user);

console.log(test21 instanceof User);
console.log(test21 instanceof test);
