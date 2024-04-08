
function ElectronicDevice(IMEI,manufacturer,priceOfPledge,isAllowedSale=true,isSold=false){
    this.IMEI=IMEI;
    this.manufacturer=manufacturer;
    this.priceOfPledge=priceOfPledge;
    this.isAllowedSale=isAllowedSale;
    this.isSold=isSold;

    // console.log("ElectronicDevice Constructor is called!");
}

ElectronicDevice.prototype.calculateSellingPrice
=function(){console.log("Sub-class should implement!");}

module.exports= ElectronicDevice;