function ElectronicDevice(id,brand,manufactureDate){
    this.id=id;
    this.brand=brand;
    this.manufactureDate=manufactureDate;
}

ElectronicDevice.prototype.deviceInfo=function(){
    console.log(`Device ID:${this.id}\nBrand:${this.brand}\nManufactureDate:${this.manufactureDate}`);
}

const tv=new ElectronicDevice(1214,'Samsung',new Date());
// tv.deviceInfo();
// console.log(JSON.stringify(tv));

/**
 * using this to call another constructor function is a way to implement inheritance in JavaScript, 
 * ensuring that the new object (Phone in this case) receives properties from both its own constructor and
 * from the ElectronicDevice constructor, effectively making Phone a subclass of ElectronicDevice.
 */

function Phone(id,brand,manufactureDate,isSupport5G){
    ElectronicDevice.call(this,id,brand,manufactureDate);
    this.isSupport5G=isSupport5G;
}

// Inherit Prototype
// Phone inherits from ElectronicDevice
Phone.prototype=Object.create(ElectronicDevice.prototype);

// Use Phone Constructor 
Phone.prototype.constructor=Phone;

// Override the deviceInfo function for the Phone Object.
Phone.prototype.deviceInfo=function(){
   // ElectronicDevice.prototype.deviceInfo.call(this);
   console.log(
    `Device ID:${this.id}\nBrand:${this.brand}
ManufactureDate:${this.manufactureDate}\nSupport 5G:${this.isSupport5G ? 'Yes' : 'No'}`
    );
    //console.log(`Support 5G:${this.isSupport5G ? 'Yes' : 'No'}`);
}

const phone1=new Phone(21232,'Apple',new Date(),true);

// console.log(phone1);

phone1.deviceInfo();