import {addUser, createTable} from './create-table.js';
import removeUser from './remove-user.js';
import updateUser from './update-user.js';

const obj1 = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com'
}

const obj2 = {
  id: 2,
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'janesmith@gmail.com'
}

const obj3 = {
  id: 3,
  firstName: 'Alice',
  lastName: 'Johnson',
  email: 'alicejohnson@gmail.com'
}

const obj4 = {
  id: 4,
  firstName: 'Bob',
  lastName: 'Williams',
  email: 'bobwilliams@gmail.com'
}

const obj5 = {
  id: 5,
  firstName: 'Charlie',
  lastName: 'Brown',
  email: 'charliebrown@gmail.com'
}
const obj6 = {
  id: 6,
  firstName: 'Catalina',
  lastName: 'Wisko',
  email: 'catalina@gmail.com'
}


createTable('ID','First Name','Last Name','Email');
addUser(obj1,obj2,obj3,obj4,obj5,obj6);

try{
 // removeUser(2);
}
catch(error){
  console.log(error.message)
}

const newUser={
  id:88,firstName:'waflo',lastName:'maflo',email:'maflo@gmail.com'};

updateUser(4,newUser);