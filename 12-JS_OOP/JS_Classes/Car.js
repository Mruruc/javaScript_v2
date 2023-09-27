
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

}

export class Model extends Car{

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


}