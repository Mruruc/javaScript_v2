class User{

    constructor(id,userName,password){
        this.id=id;
        this.userName=userName;
        this.password=password;
        this.lastLogin=new Date();
    }
    
    getUserinfo(){
       return `ID: ${this.id}\nUser Name: ${this.userName}\nPassword: ${this.password}\nLast Login: ${this.lastLogin}`;
    }
}

export default User;

