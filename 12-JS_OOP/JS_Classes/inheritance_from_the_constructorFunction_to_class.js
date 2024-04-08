
const Base=function(id,otherField){
    this.id=id;
    this.otherField=otherField;
    this.foo=function(){
        console.log(`Base Class Fields:${this.id} and ${this.otherField}`);
    }
}

class ChildClass extends Base{
    constructor(id,otherField,childField){
        super(id,otherField);
        this.childField=childField;
    }

    bar(){
        console.log(`ChildClass Field: ${this.childField}`);
       // super.foo();
    }
    
}

const child=new ChildClass(13,'HUHHFO','child');

console.log(child);
child.bar();
child.foo();