
function User(id,userName){
    this.id=id;
    this.userName=userName;
}

User.prototype.isEqual=function(user){

    const thisKeys=Object.keys(this);
    const userKeys=Object.keys(user);

    if(thisKeys.length !== userKeys.length){
        return false;
    }

    for (const element of thisKeys) {
        console.log(`${this[element]} ${user[element]}`);

        if( this[element] !== user[element]){
            return false;
        }
    }
    return true;
}



const user1=new User(1,'Mr.John');
const user2=new User(1,'Mr.John');
const user3=user2;

/*
if(user1 == user2){
    console.log(`user1 is equal user2`);
}
else{
    console.log(`user1 is not equal user2`);
}

if(user3 === user2){
    console.log(`user3 is equal user2`);
}
else{
    console.log(`user3 is not equal user2`);
}

*/

// console.log(user1.isEqual(user2));





/**
 * function deepComp(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!deepComp(obj1[key], obj2[key])) {
        return false;
      }
    } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!deepComp(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
 */