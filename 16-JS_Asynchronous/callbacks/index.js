
function first(){
  console.log('This is a callback function');
}

function second(_callback){
   console.log('HERE is second function');
  _callback();
 
}

function third(_callback){
  console.log("This is the third function.");
  _callback();
}



third(function(){
  second(first);
});