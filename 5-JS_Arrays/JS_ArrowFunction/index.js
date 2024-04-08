
/**
 * Arrow functions were introduced in ES6.
 * Arrow functions allow us to write shorter function syntax:
 */

        try{



                function greet1(name){
                    return `Hello ${name}`;
                }

                console.log(greet1("Waflo"));

                const greet2=name => `Hello ${name}`;
                console.log(`Greeting from V2 function: ${greet2("Shipoo")}`);

                const greet3=(firstName,lastName)=>{
                    return `Hello ${firstName} ${lastName}`;
                }

                console.log(
                    greet3("Nello","Bombello")
                );




        }
        catch(error){
            console.log(error.message);
        }