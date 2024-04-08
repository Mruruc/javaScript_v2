/**
 * Functions running in parallel with other functions are called asynchronous
 * A good example is JavaScript setTimeout()
 */

/*
console.log(`${new Date().getMinutes()}: ${new Date().getSeconds()}:${new Date().getMilliseconds()}`);

setTimeout(
    ()=>console.log(`${new Date().getMinutes()}: ${new Date().getSeconds()}:${new Date().getMilliseconds()}`),2000
);

console.log(`${new Date().getMinutes()}: ${new Date().getSeconds()}:${new Date().getMilliseconds()}`);

*/

//setInterval() 
// allow us to specify a time and after every this will call a callback function

function time(){
    let time=new Date();
    console.log(time.getMinutes()+" : "+time.getMinutes()+" : "+time.getSeconds());
}

function inhibitor(second,timerID){
    second *=1000;
    setTimeout(()=>{
        clearInterval(timerID);
    },second);
}


/// every 1000 milliseconds will call the time() method.
let timerID=setInterval(time,1000);
console.log(timerID);

/// inhibitor(6,timerID);


 




