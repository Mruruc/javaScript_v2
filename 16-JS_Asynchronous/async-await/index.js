/**
 * async makes a function return a Promise
 * await makes a function wait for a Promise
 *
 * The await keyword can only be used inside an async function.
 * The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
 */

function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date());
      // reject(new Error('Error Ocurred!'));
    }, 2000);
  });
}

/*
getDate()
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err.message)
});
*/
const arr = [];
const addUser = (input) => {
  arr.push(input);
  console.log(arr);
};

async function getResult() {
  try {
    const result = await getDate();
    console.log(result);
    addUser(result);
  } catch (error) {
    console.log(error.message);
  }
}

getResult();

const url = 'https://api.github.com/users/Mruruc';

async function fetchUser() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Fetched Invalid Data!');
    }
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    alert(error.message);
  }
}

async function displayUserData() {
  const user = await fetchUser();

  for (let key in user) {
    console.table(key + ': ' + user[key]);
  }
}

displayUserData();
