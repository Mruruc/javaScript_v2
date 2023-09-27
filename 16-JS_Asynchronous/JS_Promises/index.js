function myResolve(x) {
  console.log(`Success : ${x}`);
}
function myReject() {
  console.log('error ocurred');
}

function test(x) {
  return new Promise(function (resolve, reject) {
    if (x === 10) {
      resolve(x);
    } else {
      reject();
    }
  });
}

//test(10).then(myResolve).catch(myReject);

function getWeather() {
  return new Promise(function (resolve, reject) {
    //resolve('Sunny');
    reject('Error !');
  });
}

/* getWeather()
  .then(function (data) {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });     */

const url = 'https://api.github.com/users/Mruruc';


 /* 
 
 fetch(url)
.then((response)=>{

  if(response.ok){
    return response.json();
  }
  else{
    throw new Error('Error');
  }
}
)
.then((data)=>{
  console.log(data)
 
 const img=document.createElement('img');
 img.src = data.avatar_url;
 document.body.appendChild(img);

})
.catch((error)=>{
  console.log(error)
});

*/

