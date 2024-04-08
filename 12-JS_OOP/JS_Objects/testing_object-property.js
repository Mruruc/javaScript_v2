
function User(id,userName){
    this.id=id;
    this.userName=userName;
}

/*
if(undefined){
    console.log(true);
}else{
    console.log(false);
}
*/

const user=new User(1,'Mr.Doe'); 
//if(user.password)
//if('password' in user)
if(user.hasOwnProperty('password')){
    console.log('User has password!');
}
else{
    console.log('User Object Does Not Have The Password Property!');
}