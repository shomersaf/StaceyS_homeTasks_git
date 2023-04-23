class Car {
    constructor (brand, owner){
        this.brand = brand;
        this.owner = owner,
        this.gasTank = 100;
        this.zapravka =[];
    }
    getGas(){
        this.gasTank +=10;
        const timeStamp =Date.now();
        const time = new Date(timeStamp);
        this.zapravka.push(time.toString());
        return this.gasTank;
    }
    drive(){
        this.gasTank -=10;
        return this.gasTank;
    }
    publish(){
        console.log(nissan);
    }
}
const nissan = new Car ('Nissan','me');
console.clear();
nissan.publish();
nissan.drive();
nissan.drive();
nissan.publish();
nissan.getGas();
nissan.publish();

//docherny class
class HybridCar extends Car{
    constructor (brand, model){
        super(brand)
       // this.brand = brand;
        this.model = model
}
autopark(){
    console.log("Parked automatically!")
}
}
const lexus = new HybridCar ('Lexus','RX');
console.log(lexus);
lexus.drive();

lexus.getGas();
console.log(lexus);
lexus.getGas();
lexus.autopark();
///for nissan it won't work!
console.log(lexus);
