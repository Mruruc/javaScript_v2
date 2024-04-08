import ElectronicDevice from "./ElectronicDevice.js";

function Tablet(IMEI,manufacturer,priceOfPledge,isAllowedSale,isSold,isMakePhoneCall){
    ElectronicDevice.call(this,IMEI,manufacturer,priceOfPledge,isAllowedSale,isSold);
    this.isMakePhoneCall=isMakePhoneCall;
}

Tablet.prototype=Object.create(ElectronicDevice.prototype);
Tablet.prototype.constructor=Tablet;
Tablet.prototype.calculateSellingPrice=function(){
    return this.isMakePhoneCall ? this.priceOfPledge * 1.4 : this.priceOfPledge * 1.3;
}

export default Tablet;