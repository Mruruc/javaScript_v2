
export class Car{
    constructor(brand){
        this._brand=brand;
    }
    get brand(){
        return this._brand;
    }
    
    set brand(brand){
        this._brand=brand.toUpperCase();
    }

    carInfo(){
        return `Brand:${this.brand}`;
    }

}

export class Bus extends Car{

    constructor(brand,model){
        super(brand);
        this._model=model;
    }

    set model(model){
        this._model=model;
    }
    get model(){
        return this._model;
    }

      // Override the carInfo method
      carInfo() {
        console.log(`Brand: ${this.brand},\nModel: ${this.model}`);
    }
}