import ElectronicDevice from "./ElectronicDevice.js";

function Phone(IMEI,manufacturer,priceOfPledge,isAllowedSale=false,isSold=false,isSupport5G){
    ElectronicDevice.call(this,IMEI,manufacturer,priceOfPledge,isAllowedSale,isSold);
    this.isSupport5G=isSupport5G;
}

Phone.prototype=Object.create(ElectronicDevice.prototype);

Phone.prototype.constructor=Phone;

Phone.prototype.calculateSellingPrice=function(){
    const result=this.isSupport5G ? this.priceOfPledge * 1.2 : this.priceOfPledge * 1.1;
    return Math.round(result).toFixed(2);
}
export default Phone;