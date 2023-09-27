
let list2 = [];

function getItem(list) {
  setTimeout(() => {
    let output = '';
    /*list.forEach((item) => {
      output += `<li>${item}</li>`;
    }); */
    for (const user of list) {
      for (const key in user) {
        output += `<li>${user.login}</li>`;
      }
    }
    document.querySelector('section').innerHTML = output;
  }, 1000);
}

//one Solution is that time to adding item keeping less than item rendering

/*function addItem(item){
  setTimeout(()=>{
    list.push(item);
  },1000
  );
}*/

/*function addItem(item, _callBack) {
  setTimeout(() => {
    list.push(item);
    _callBack();
  }, 2000);
}
addItem('Banana', getItem);  */

function addItem(item) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
    
      list2.push(item);

      let err=false;
      if(!err){
        resolve();
      }
      else{
        reject('Error: Something went wrong!');
        err=true;
      }
    }, 1000);

  });
}
/*
addItem('Banana')
.then(getItem)
.catch(err=>console.log(err));  */

 
//async function init(){
  //await addItem('Banana');
  //getItem();
//} 

//init();

async function fetchUsers(){

 const res= await fetch('https://api.github.com/users');
 const users=await res.json();
 console.log(users)
 list2=[...users];
 getItem(list2);

}

//fetchUsers();
