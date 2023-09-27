

const removeUser = (id) => {
 const user= document.getElementById(id);
 if(user!==null){
   user.remove();
 }
 throw new Error("Specified Index Does NOT EXIST!");
}

export default removeUser
