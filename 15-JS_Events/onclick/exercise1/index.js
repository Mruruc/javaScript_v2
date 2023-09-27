const getForm = document.querySelector('.display-form');
getForm.style.display = 'none';

const addBtn = document.getElementById('add-btn');
addBtn.onclick = () => (getForm.style.display = 'block');

const users = [];

function saveInput(event) {
  event.preventDefault();

  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');

  const newUser = {
    firstName: fname.value,
    lastName: lname.value,
    email: email.value,
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  getForm.style.display = 'none';
}



document.querySelector('.save').addEventListener('click', saveInput);

const storedUsers = localStorage.getItem('users');
if (storedUsers) {
  users.push(...JSON.parse(storedUsers));
}


for (const user of users) {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
  console.log('===================');
}

//users.forEach(user=> console.log(user.firstName , user.lastName, user.email));