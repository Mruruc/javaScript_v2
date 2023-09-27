/**
 * Functions running in parallel with other functions are called asynchronous
 * A good example is JavaScript setTimeout()
 */

setTimeout(()=>console.log("Somthing"),4000);

//setInterval() 
// allow us to specify a time and after every this will call a callback function

function time(){
    let time=new Date();
    console.log(time.getHours()+" : "+time.getMinutes()+" : "+time.getSeconds());
}

//setInterval(time,1000);

/// every 1000 miliseconds will call the time() method.
