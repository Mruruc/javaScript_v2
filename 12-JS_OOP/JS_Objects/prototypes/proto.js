// !!!!! every new object in JavaScript is created by default from the generic Object constructor.!!!!!!!!!!!!!!!

// One of the properties that each object inherits is the __proto__ field. 

function User(id,userName){
    this.id=id;
    this.userName=userName;
}
const user=new User(123463,'Johnnn');

// console.log(User.prototype === user.__proto__);

user.__proto__.userInfo=function(){
    console.log(`ID:${this.id}, UserName:${this.userName}`);
}
user.userInfo();
console.log(user.__proto__);

const user2=new User(21324,'Mss.Jane');
user2.userInfo();

const arr=[];
console.log(arr);