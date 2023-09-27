/**
 * Throw, and Try...Catch...Finally
 * The try statement defines a code block to run (to try).
 * The catch statement defines a code block to handle any error.
 * The finally statement defines a code block to run regardless of the result.
 * The throw statement defines a custom error.
 */

 try{
   
    const xValue=window.prompt("Please enter the value of numerator:");
    const yValue=window.prompt("Please enter the value of denominator:");

    x=Number(xValue);
    y=Number(yValue);

    if(!isFinite(x) || !isFinite(y)){
        throw new Error("Please enter the valid number !");
    }

    division(x,y);

    function division(x,y){
        if(y==0){
            throw new Error("The \"Denominator\" can not e zero !");
        }
        console.log(x/y);
    }

}
catch(error){
   console.log(`Error Name: ${error.name},\n Error Message: ${error.message}`);
} 