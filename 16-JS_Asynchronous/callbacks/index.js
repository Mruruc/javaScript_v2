
function first(){
  console.log('This is a callback function');
}

function second(_callback){
   console.log('HERE is second function');
  _callback();
 
}

second(first);